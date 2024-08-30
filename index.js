/*
 * Copyright (C) 2023-2024 Reyadeyat
 * All Rights Reserved.
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * https://reyadeyat.net/LICENSE/REYADEYAT.LICENSE
 * 
 * This License permits the use, modification, and distribution of the code
 * under the terms specified in the License document.
 */

"use strict";

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
