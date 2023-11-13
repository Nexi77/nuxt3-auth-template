import { defineFormKitConfig } from '@formkit/vue';
import { applicationIcons, genesisIcons } from '@formkit/icons';

export default defineFormKitConfig({
    icons: {
        ...applicationIcons,
        ...genesisIcons
    }
});
