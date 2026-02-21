import React from 'react';
import type { IconProps } from '../types';

export const TabChatBubble = (props: IconProps) => (
  <svg
    width="22px"
    height="22px"
    viewBox="0 0 22 22"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <title>tab-chat-bubble</title>
    <path
      d="M11 2.5C6.30558 2.5 2.5 6.02944 2.5 10.375C2.5 12.1615 3.1145 13.8071 4.14952 15.1099L3.0625 19.25L7.45993 18.2435C8.54714 18.7107 9.74318 18.9783 11 18.9783C15.6944 18.9783 19.5 15.4489 19.5 11.1034C19.5 6.75793 15.6944 2.5 11 2.5Z"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <circle cx="8" cy="11" r="1" fill="currentColor" />
    <circle cx="11" cy="11" r="1" fill="currentColor" />
    <circle cx="14" cy="11" r="1" fill="currentColor" />
  </svg>
);

export default TabChatBubble;
