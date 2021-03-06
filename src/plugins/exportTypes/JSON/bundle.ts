import { ExportTypeType } from '../../../../types/exportTypes';
import * as generator from './JSON.generator';
import { Settings } from './JSON.ui';
import Preview from './JSONPreview.container';


export const exportType: ExportTypeType = {
    test123: 'chicken',
    generate: generator.generate,
    settingsComponent: Settings,
    previewComponent: Preview
};
