import * as atoms from './atoms';
import * as molecules from './molecules';
import * as templates from './templates';
import * as icons from './icons';

const toSortedExportNames = (group: Record<string, unknown>) =>
  Object.keys(group)
    .filter((name) => name !== 'default')
    .sort((a, b) => a.localeCompare(b));

export const componentCatalog = {
  atoms: toSortedExportNames(atoms),
  molecules: toSortedExportNames(molecules),
  templates: toSortedExportNames(templates),
  icons: toSortedExportNames(icons),
} as const;
