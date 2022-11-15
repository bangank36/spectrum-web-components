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

import { createComponent } from '@lit-labs/react';
import * as React from 'react';

import { IconType } from '@spectrum-web-components/icons-workflow/src/elements/IconType.js';
import '@spectrum-web-components/icons-workflow/icons/sp-icon-type.js';

export const SpIconType = createComponent({
    react: React,
    tagName: 'sp-icon-type',
    elementClass: IconType,
    events: {},
    displayName: 'SpIconType',
});
