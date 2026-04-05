/**
 * AdService.ts
 * Manages Start.io ads for the application.
 */

declare global {
  interface Window {
    startio: any;
  }
}

export const AdService = {
  /**
   * Shows a banner ad in a specific container.
   * @param containerId The ID of the HTML element where the banner will be placed.
   */
  showBanner: (containerId: string) => {
    if (window.startio) {
      window.startio('banner', {
        container: containerId,
        type: 'standard', // 'standard' or 'mrec'
      });
    }
  },

  /**
   * Shows an interstitial ad.
   */
  showInterstitial: () => {
    if (window.startio) {
      window.startio('interstitial');
    }
  },
};
