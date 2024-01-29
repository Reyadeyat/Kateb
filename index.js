/*
 * Copyright (C) 2023 Reyadeyat
 *
 * Reyadeyat/KATEB is licensed under the
 * BSD 3-Clause "New" or "Revised" License
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://reyadeyat.net/LICENSE/KATEB.LICENSE
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

"use strict";

import { Log } from './log.js'
import { ketab } from './ketab.js';

export class Kateb {

    constructor(kateb_json) {
        let rasem_json = {
            posX: 50,
            canvas_container_id: "kateb_rasem_container",
            canvas_fore_color: "white",
            canvas_back_color: "black",
            canvas_width: 400,
            canvas_height: 400,
            log_level: 'TRACE_DATA'
          }
          this.rasem = new Rasem(rasem_json);
          this.rasem.draw();
        
    }
}
