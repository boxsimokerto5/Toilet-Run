import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.toiletrun.mobile',
  appName: 'Toilet Run Mobile',
  webDir: 'dist',
  server: {
    allowNavigation: [
      'play.famobi.com',
      '*.famobi.com',
      '*.google-analytics.com',
      '*.googletagmanager.com',
      '*.google.com',
      '*.gstatic.com'
    ]
  }
};

export default config;
