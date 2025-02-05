import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'GernikaApp',
  webDir: 'www',
  plugins: {
    ScreenOrientation: {
      allowOrientationChange: false,
      orientation: 'portrait'
    }
  }
};

export default config;
