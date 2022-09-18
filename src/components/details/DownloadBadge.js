import React from 'react';
import DownloadButton from './DownloadButton';

const DownloadBadge = ({ movie }) => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center rounded-lg p-4 gap-5 dark:bg-slate-900 bg-slate-200">
      <div className="p-6 w-full gap-4 flex justify-between items-center dark:bg-slate-700 bg-slate-300 rounded-lg flex-wrap">
        <p>کیفیت: 1080p حجم: 1.88 گیگابایت | کیفیت: 720p حجم: 1 گیگابایت </p>
        <div className="flex gap-2 flex-wrap">
          <DownloadButton title="دانلود 1080" toWhere="/" />
          <DownloadButton title="دانلود 720" toWhere="/" />
          <DownloadButton title="دانلود 480" toWhere="/" />
        </div>
      </div>
      <div className="p-6 w-full gap-4 flex justify-between items-center dark:bg-slate-700 bg-slate-300 rounded-lg flex-wrap">
        <p>کیفیت: 1080p حجم: 1.88 گیگابایت | کیفیت: 720p حجم: 1 گیگابایت </p>
        <div className="flex gap-2 flex-wrap">
          <DownloadButton title="دانلود 1080" toWhere="/" />
          <DownloadButton title="دانلود 720" toWhere="/" />
        </div>
      </div>
    </div>
  );
};

export default DownloadBadge;
