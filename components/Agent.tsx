import React from 'react';
import Image from "next/image";
import { cn } from '@/lib/utils';

enum CallStatus {
    INACTIVE = 'INACTIVE',
    ACTIVE = 'ACTIVE',
    CONNECTING = 'CONNECTING',
    FINISHED = 'FINISHED',
}

interface AgentProps {
    userName: string;
}

const Agent = ({ userName }: AgentProps) => {
    const callStatus = CallStatus.FINISHED;
    const isSpeaking = true;
    const messages = [
        'Whats your name?',
        'What is your experience with React?',
        'How do you handle state management in your applications?',
    ];
    const lastMessage = messages[messages.length - 1];

    return (
        <>
            <div className="call-view">
                <div className="card-interviewer">
                    <div className="avatar">
                        <Image src="/ai-avatar.png" alt="vapi" width={65} height={54} className="object-cover" />
                        {isSpeaking && <span className="animate-speak"></span>}
                    </div>
                    <h3>AI Interview</h3>
                </div>

                <div className="card-border">
                    <div className="card-content">
                        <Image src="/user-avatar.png" alt="user" width={540} height={540} className="rounded-full object-cover size-[120px]" />
                        <h3>{userName}</h3>
                    </div>
                </div>
            </div>

            {messages.length > 0 && (
                <div className="transcript-border">
                    <div className="transcript">
                        <p key={lastMessage} className={cn('transition-opacity duration-500 opacity-0', 'animate-fadeIn opacity-100')}>
                            {lastMessage}
                        </p>
                    </div>

                    <div className="w-full flex justify-center">
                        {callStatus !== 'ACTIVE' ? (
                            <button className="relative btn-call">
                                <span className={cn(
                                    'absolute animate-ping rounded-full opacity-75',
                                    callStatus === 'CONNECTING' && 'hidden'
                                )} />
                                <span>
                                    {callStatus === 'INACTIVE' || callStatus === 'FINISHED' ? 'CALL' : '. . .'}
                                </span>
                            </button>
                        ) : (
                            <button className="btn-disconnect">
                                End
                            </button>
                        )}
                    </div>
                </div> // ✅ closing transcript-border
            )}
        </>
    );
};

export default Agent;
