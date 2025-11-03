'use client';

import { useState } from 'react';
import Link from 'next/link';

interface User {
  id: string;
  email: string;
  firstName?: string | null;
  lastName?: string | null;
}

interface Session {
  id: string;
  title: string;
  date: string;
  time: string;
  level: string;
  status: 'upcoming' | 'active' | 'completed';
  attendanceCode?: string;
  attendeeCount: number;
}

interface AdminSessionsClientProps {
  user: User;
}

const generateAttendanceCode = (): string => {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code = '';
  const array = new Uint32Array(8);
  crypto.getRandomValues(array);
  for (let i = 0; i < array.length; i++) {
    code += chars.charAt(array[i] % chars.length);
  }
  return code;
};

export default function AdminSessionsClient({ user }: AdminSessionsClientProps) {
  const [sessions, setSessions] = useState<Session[]>([
    {
      id: '1',
      title: "Level 1: The Debugger's Dialogue",
      date: '2024-11-04',
      time: '6:00 PM - 7:00 PM EST',
      level: 'Level 1',
      status: 'upcoming',
      attendeeCount: 0,
    },
    {
      id: '2',
      title: "Level 2: The Architect's Articulation",
      date: '2024-10-28',
      time: '6:00 PM - 7:00 PM EST',
      level: 'Level 2',
      status: 'completed',
      attendeeCount: 24,
    },
  ]);

  const [activeSessionId, setActiveSessionId] = useState<string | null>(null);

  const startSession = (sessionId: string) => {
    const code = generateAttendanceCode();
    setSessions((prev) =>
      prev.map((session) =>
        session.id === sessionId
          ? { ...session, status: 'active', attendanceCode: code }
          : session,
      ),
    );
    setActiveSessionId(sessionId);
  };

  const endSession = (sessionId: string) => {
    setSessions((prev) =>
      prev.map((session) =>
        session.id === sessionId
          ? { ...session, status: 'completed', attendanceCode: undefined }
          : session,
      ),
    );
    setActiveSessionId(null);
  };

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code);
  };

  const activeSession = sessions.find((s) => s.id === activeSessionId);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold mb-2">Session Management</h1>
              <p className="text-slate-300">Start sessions and manage attendance codes</p>
              <p className="text-sm text-slate-400 mt-2">
                Signed in as {user.firstName ? `${user.firstName} ${user.lastName ?? ''}`.trim() : user.email}
              </p>
            </div>
            <Link
              href="/admin"
              className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
            >
              ← Back to Admin
            </Link>
          </div>
        </div>
      </div>

      {activeSession && (
        <div className="bg-gradient-to-r from-green-500 to-green-600 text-white py-8 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center animate-pulse">
                  <div className="w-3 h-3 bg-white rounded-full" />
                </div>
                <div>
                  <div className="text-sm font-semibold opacity-90 mb-1">LIVE NOW</div>
                  <h2 className="text-2xl font-bold">{activeSession.title}</h2>
                  <p className="text-green-100">{activeSession.time}</p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/20">
                <div className="text-center mb-3">
                  <div className="text-sm font-semibold opacity-90 mb-2">ATTENDANCE CODE</div>
                  <div className="text-5xl font-bold tracking-widest mb-3 font-mono">
                    {activeSession.attendanceCode}
                  </div>
                  <button
                    onClick={() => copyToClipboard(activeSession.attendanceCode!)}
                    className="px-4 py-2 bg-white text-green-600 rounded-lg font-semibold hover:bg-green-50 transition-colors text-sm"
                  >
                    📋 Copy Code
                  </button>
                </div>
                <div className="text-center text-sm opacity-90 mt-3 border-t border-white/20 pt-3">
                  Share this code with attendees to mark attendance
                </div>
              </div>

              <button
                onClick={() => endSession(activeSession.id)}
                className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg font-semibold transition-colors shadow-lg"
              >
                End Session
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">All Sessions</h2>
          <p className="text-slate-600">Manage upcoming, active, and past sessions</p>
        </div>

        <div className="space-y-4">
          {sessions.map((session) => (
            <div
              key={session.id}
              className={`bg-white rounded-xl border-2 p-6 transition-all ${
                session.status === 'active'
                  ? 'border-green-500 shadow-lg shadow-green-500/20'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    {session.status === 'active' && (
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold uppercase flex items-center gap-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        Live Now
                      </span>
                    )}
                    {session.status === 'upcoming' && (
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase">
                        Upcoming
                      </span>
                    )}
                    {session.status === 'completed' && (
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-bold uppercase">
                        Completed
                      </span>
                    )}
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-semibold">
                      {session.level}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2">{session.title}</h3>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {new Date(session.date).toLocaleDateString('en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {session.time}
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                      {session.attendeeCount} attendees
                    </div>
                  </div>

                  {session.status === 'active' && session.attendanceCode && (
                    <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-sm font-semibold text-green-900 mb-1">
                            Active Attendance Code
                          </div>
                          <div className="text-2xl font-bold text-green-700 font-mono tracking-wide">
                            {session.attendanceCode}
                          </div>
                        </div>
                        <button
                          onClick={() => copyToClipboard(session.attendanceCode!)}
                          className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-colors text-sm"
                        >
                          Copy
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex gap-3">
                  {session.status === 'upcoming' && (
                    <button
                      onClick={() => startSession(session.id)}
                      className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-colors shadow-lg hover:shadow-xl"
                    >
                      Start Session
                    </button>
                  )}
                  {session.status === 'active' && (
                    <button
                      onClick={() => endSession(session.id)}
                      className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg font-semibold transition-colors"
                    >
                      End Session
                    </button>
                  )}
                  <Link
                    href={`/admin/sessions/${session.id}`}
                    className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-900 rounded-lg font-semibold transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
