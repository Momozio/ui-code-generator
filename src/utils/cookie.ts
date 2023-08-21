export class Cookie {
  static get(name: string): string | null {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
      return parts.pop()!.split(';').shift()!;
    }
    return null;
  }

  static set(name: string, value: string, expires?: number): void {
    let expiresString = '';
    if (expires) {
      const date = new Date();
      date.setTime(date.getTime() + expires * 1000);
      expiresString = `; expires=${date.toUTCString()}`;
    } else {
      expiresString = `; expires=${new Date(2106058400000).toUTCString()}`;
    }
    document.cookie = `${name}=${value}${expiresString}; path=/`;
  }

  static remove(name: string): void {
    this.set(name, '', -1);
  }
}