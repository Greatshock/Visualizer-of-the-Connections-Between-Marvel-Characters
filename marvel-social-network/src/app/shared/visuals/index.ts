export * from './node-visual/node-visual.component';
export * from './link-visual/link-visual.component';
export * from './graph/graph.component';

import { NodeVisualComponent } from './node-visual/node-visual.component';
import { LinkVisualComponent } from './link-visual/link-visual.component';
import { GraphComponent } from './graph/graph.component';

export const SHARED_VISUALS = [
    GraphComponent,
    NodeVisualComponent,
    LinkVisualComponent
];
