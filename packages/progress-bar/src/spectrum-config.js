/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

const config = {
    spectrum: 'progressbar',
    components: [
        {
            name: 'progress-bar',
            host: {
                selector: '.spectrum-ProgressBar',
            },
            attributes: [
                {
                    type: 'boolean',
                    selector: '.spectrum-ProgressBar--sideLabel',
                    name: 'side-label',
                },
                {
                    type: 'enum',
                    name: 'size',
                    forceOntoHost: true,
                    values: [
                        {
                            name: 's',
                            selector: '.spectrum-ProgressBar--sizeS',
                        },
                        {
                            name: 'm',
                            selector: '.spectrum-ProgressBar--sizeM',
                        },
                        {
                            name: 'l',
                            selector: '.spectrum-ProgressBar--sizeL',
                        },
                        {
                            name: 'xl',
                            selector: '.spectrum-ProgressBar--sizeXL',
                        },
                    ],
                },
                {
                    type: 'enum',
                    name: 'static',
                    values: [
                        {
                            name: 'black',
                            selector: '.spectrum-ProgressBar--staticBlack',
                        },
                        {
                            name: 'white',
                            selector: '.spectrum-ProgressBar--staticWhite',
                        },
                    ],
                },
                {
                    type: 'boolean',
                    selector: '.spectrum-ProgressBar--indeterminate',
                    name: 'indeterminate',
                },
                {
                    type: 'boolean',
                    name: 'over-background',
                    selector: '.spectrum-ProgressBar--overBackground',
                },
                {
                    type: 'boolean',
                    name: 'positive',
                    selector: '.is-positive',
                },
                {
                    type: 'boolean',
                    name: 'warning',
                    selector: '.is-warning',
                },
                {
                    type: 'boolean',
                    name: 'critical',
                    selector: '.is-critical',
                },
            ],
            classes: [
                {
                    selector: '.spectrum-ProgressBar-track',
                    name: 'track',
                },
                {
                    selector: '.spectrum-ProgressBar-fill',
                    name: 'fill',
                },
                {
                    selector: '.spectrum-ProgressBar-label',
                    name: 'label',
                },
                {
                    selector: '.spectrum-ProgressBar-percentage',
                    name: 'percentage',
                },
            ],
        },
    ],
};

export default config;
