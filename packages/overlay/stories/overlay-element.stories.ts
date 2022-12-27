/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

import { html, TemplateResult } from '@spectrum-web-components/base';
import '@spectrum-web-components/overlay/sp-overlay.js';
import '@spectrum-web-components/action-button/sp-action-button.js';
import '@spectrum-web-components/action-group/sp-action-group.js';
import '@spectrum-web-components/popover/sp-popover.js';
import '@spectrum-web-components/icons-workflow/icons/sp-icon-anchor-select.js';
import '@spectrum-web-components/icons-workflow/icons/sp-icon-polygon-select.js';
import '@spectrum-web-components/icons-workflow/icons/sp-icon-rect-select.js';

export default {
    title: 'Overlay Element',
    component: 'sp-overlay',
    args: {
        open: true,
    },
    argTypes: {
        open: {
            name: 'open',
            type: { name: 'boolean', required: false },
            description: 'Whether the second accordion item is open.',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: false },
            },
            control: {
                type: 'boolean',
            },
        },
    },
};

export const modal = ({ open }: { open: boolean }): TemplateResult => html`
    <sp-action-button id="trigger">Open the overlay</sp-action-button>
    <sp-overlay
        ?open=${open}
        trigger="trigger@click"
        type="modal"
        placement="right"
    >
        <sp-popover dialog tip>Content</sp-popover>
    </sp-overlay>
`;

export const page = ({ open }: { open: boolean }): TemplateResult => html`
    <sp-action-button id="trigger">Open the overlay</sp-action-button>
    <sp-overlay
        ?open=${open}
        trigger="trigger@click"
        type="modal"
        placement="right"
    >
        <sp-popover dialog>Content</sp-popover>
    </sp-overlay>
`;

export const click = ({ open }: { open: boolean }): TemplateResult => html`
    <sp-action-button id="trigger">Open the overlay</sp-action-button>
    <sp-overlay
        ?open=${open}
        trigger="trigger@click"
        type="auto"
        placement="right"
    >
        <sp-popover dialog>Content</sp-popover>
    </sp-overlay>
`;

export const hover = ({ open }: { open: boolean }): TemplateResult => html`
    <sp-action-button id="trigger">Open the overlay</sp-action-button>
    <sp-overlay ?open=${open} trigger="trigger@hover">
        <sp-tooltip>Content</sp-tooltip>
    </sp-overlay>
`;

export const longpress = ({ open }: { open: boolean }): TemplateResult => html`
    <sp-action-button id="trigger" hold-affordance>
        Open the overlay
    </sp-action-button>
    <sp-overlay
        ?open=${open}
        trigger="trigger@longpress"
        type="auto"
        placement="right"
    >
        <sp-popover dialog>Content</sp-popover>
    </sp-overlay>
`;

export const all = (): TemplateResult => html`
    <sp-action-button id="trigger" hold-affordance>
        Open the overlay
    </sp-action-button>
    <sp-overlay trigger="trigger@click" type="auto" placement="right">
        <sp-popover dialog>Click content</sp-popover>
    </sp-overlay>
    <sp-overlay trigger="trigger@hover">
        <sp-tooltip>Hover content</sp-tooltip>
    </sp-overlay>
    <sp-overlay trigger="trigger@longpress" type="auto" placement="right">
        <sp-popover dialog>Longpress content</sp-popover>
    </sp-overlay>
`;

export const actionGroup = (): TemplateResult => {
    const popoverOffset = [6, -9] as [number, number];
    return html`
        <style>
            sp-popover sp-action-group {
                padding: var(--spectrum-actiongroup-vertical-spacing-regular);
            }
            sp-popover {
                position: static;
            }
        </style>
        <sp-popover open>
            <sp-action-group vertical quiet emphasized selects="single">
                <sp-action-button id="trigger-1" hold-affordance>
                    <sp-icon-anchor-select slot="icon"></sp-icon-anchor-select>
                </sp-action-button>
                <sp-action-button id="trigger-2" hold-affordance>
                    <sp-icon-polygon-select
                        slot="icon"
                    ></sp-icon-polygon-select>
                </sp-action-button>
                <sp-action-button id="trigger-3" hold-affordance>
                    <sp-icon-rect-select slot="icon"></sp-icon-rect-select>
                </sp-action-button>
            </sp-action-group>
        </sp-popover>
        <sp-overlay trigger="trigger-1@hover">
            <sp-tooltip>Hover</sp-tooltip>
        </sp-overlay>
        <sp-overlay
            trigger="trigger-1@longpress"
            type="auto"
            placement="right-start"
            .offset=${popoverOffset}
        >
            <sp-popover tip>
                <sp-action-group vertical quiet>
                    <sp-action-button>
                        <sp-icon-anchor-select
                            slot="icon"
                        ></sp-icon-anchor-select>
                    </sp-action-button>
                    <sp-action-button>
                        <sp-icon-polygon-select
                            slot="icon"
                        ></sp-icon-polygon-select>
                    </sp-action-button>
                    <sp-action-button>
                        <sp-icon-rect-select slot="icon"></sp-icon-rect-select>
                    </sp-action-button>
                </sp-action-group>
            </sp-popover>
        </sp-overlay>
        <sp-overlay trigger="trigger-2@hover">
            <sp-tooltip>Hover</sp-tooltip>
        </sp-overlay>
        <sp-overlay
            trigger="trigger-2@longpress"
            type="auto"
            placement="right-start"
            .offset=${popoverOffset}
        >
            <sp-popover tip>
                <sp-action-group vertical quiet>
                    <sp-action-button>
                        <sp-icon-anchor-select
                            slot="icon"
                        ></sp-icon-anchor-select>
                    </sp-action-button>
                    <sp-action-button>
                        <sp-icon-polygon-select
                            slot="icon"
                        ></sp-icon-polygon-select>
                    </sp-action-button>
                    <sp-action-button>
                        <sp-icon-rect-select slot="icon"></sp-icon-rect-select>
                    </sp-action-button>
                </sp-action-group>
            </sp-popover>
        </sp-overlay>
        <sp-overlay trigger="trigger-3@hover">
            <sp-tooltip>Hover</sp-tooltip>
        </sp-overlay>
        <sp-overlay
            trigger="trigger-3@longpress"
            type="auto"
            placement="right-start"
            .offset=${popoverOffset}
        >
            <sp-popover tip>
                <sp-action-group vertical quiet>
                    <sp-action-button>
                        <sp-icon-anchor-select
                            slot="icon"
                        ></sp-icon-anchor-select>
                    </sp-action-button>
                    <sp-action-button>
                        <sp-icon-polygon-select
                            slot="icon"
                        ></sp-icon-polygon-select>
                    </sp-action-button>
                    <sp-action-button>
                        <sp-icon-rect-select slot="icon"></sp-icon-rect-select>
                    </sp-action-button>
                </sp-action-group>
            </sp-popover>
        </sp-overlay>
    `;
};
