import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.toiletrun.mobile',
  appName: 'Toilet Run Mobile',
  webDir: 'dist',
  server: {
    allowNavigation: ['*']
  }
};

export default config;
