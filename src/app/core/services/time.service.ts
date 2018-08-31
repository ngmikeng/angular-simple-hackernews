import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  constructor() { }

  timeSince(timestamp: number) {
    const seconds = Math.floor(new Date().getTime() / 1000 - timestamp);
    let interval = Math.floor(seconds / 31536000);

    if (interval >= 1) {
      return interval > 1 ? `${interval} years` : `${interval} year`;
    }
    interval = Math.floor(seconds / 2592000);
    if (interval >= 1) {
      return interval > 1 ? `${interval} months` : `${interval} month`;
    }
    interval = Math.floor(seconds / 86400);
    if (interval >= 1) {
      return interval > 1 ? `${interval} days` : `${interval} day`;
    }
    interval = Math.floor(seconds / 3600);
    if (interval >= 1) {
      return interval > 1 ? `${interval} hours` : `${interval} hour`;
    }
    interval = Math.floor(seconds / 60);
    if (interval >= 1) {
      return interval > 1 ? `${interval} minutes` : `${interval} minute`;
    }
    return Math.floor(seconds) > 1 ? `${Math.floor(seconds)} seconds` : `${Math.floor(seconds)} second`;
  }
}
