import React from 'react';

export const NetworkIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="3" stroke="var(--brand-indigo)" strokeWidth="1.5" />
    <circle cx="4" cy="4" r="2" stroke="var(--secondary-text)" strokeWidth="1.5" />
    <circle cx="20" cy="4" r="2" stroke="var(--secondary-text)" strokeWidth="1.5" />
    <circle cx="4" cy="20" r="2" stroke="var(--secondary-text)" strokeWidth="1.5" />
    <circle cx="20" cy="20" r="2" stroke="var(--secondary-text)" strokeWidth="1.5" />
    <path d="M6 6L10 10" stroke="var(--border-standard)" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M18 6L14 10" stroke="var(--border-standard)" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M6 18L10 14" stroke="var(--border-standard)" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M18 18L14 14" stroke="var(--border-standard)" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const SecurityIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L4 5V11C4 16.19 7.41 21.05 12 22C16.59 21.05 20 16.19 20 11V5L12 2Z" stroke="var(--brand-indigo)" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M12 7V12" stroke="var(--brand-indigo)" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="12" cy="15" r="1.5" fill="var(--brand-indigo)" />
  </svg>
);

export const CloudIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 10C17.45 10 16.92 10.12 16.44 10.33C15.67 8.39 13.8 7 11.5 7C8.91 7 6.74 8.78 6.13 11.18C3.78 11.66 2 13.62 2 16C2 18.76 4.24 21 7 21H18C20.21 21 22 19.21 22 17C22 14.79 20.21 13 18 13V10Z" stroke="var(--brand-indigo)" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M12 13V17" stroke="var(--secondary-text)" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M10 15L12 17L14 15" stroke="var(--secondary-text)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const IoTIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="7" y="3" width="10" height="18" rx="2" stroke="var(--secondary-text)" strokeWidth="1.5" />
    <path d="M12 17H12.01" stroke="var(--brand-indigo)" strokeWidth="2" strokeLinecap="round" />
    <path d="M8 8H16" stroke="var(--border-standard)" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="12" cy="12" r="6" stroke="var(--brand-indigo)" strokeWidth="1" strokeDasharray="2 2" />
  </svg>
);

export const ProjectIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 12H21" stroke="var(--border-standard)" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M3 6H15" stroke="var(--secondary-text)" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M3 18H18" stroke="var(--secondary-text)" strokeWidth="1.5" strokeLinecap="round" />
    <rect x="14" y="4" width="4" height="4" rx="1" fill="var(--brand-indigo)" opacity="0.4" />
    <rect x="8" y="10" width="8" height="4" rx="1" fill="var(--brand-indigo)" />
    <rect x="16" y="16" width="5" height="4" rx="1" fill="var(--brand-indigo)" opacity="0.4" />
  </svg>
);
