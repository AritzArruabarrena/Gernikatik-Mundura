import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'GernikaApp',
  webDir: 'www',
  plugins: {
    ScreenOrientation: {
      allowOrientationChange: false, // Evita que el usuario cambie la orientación
      orientation: 'portrait' // Bloquea en modo retrato
    }
  }
};

export default config;
