//Solar System Body Descriptions (as of Jan 1, 2016)
//              [Name       parent   radius  Period  dist    theta0  color                   
//              [text,      (#)      (R_E)   (yr)    (AU)    (rad)   (vecRGB)                
var SSBd = [    ["Sun",     null,    109.3,  0.0000, 0.000,  0.0,    color.yellow          ],
                ["Mercury", "Sun",   0.382,  0.2408, 0.387,  0.5069, vec(0.980,0.973,0.949)],      //vec(0.980,0.973,0.949),
                ["Venus",   "Sun",   0.949,  0.6152, 0.723,  3.2387, color.white           ],
                ["Earth",   "Sun",   1.000,  1.0000, 1.000,  1.7561, color.white           ],      //Must be fourth in list.
                ["Mars",    "Sun",   0.532,  1.8808, 1.524,  3.0577, color.white           ],
                ["Jupiter", "Sun",   11.19,  11.86,  5.203,  2.8746, color.white           ],
                ["Saturn",  "Sun",   9.26,   29.41,  9.582,  4.3066, color.white           ],
                ["Uranus",  "Sun",   4.01,   84.04,  19.20,  0.3127, color.white           ],
                ["Neptune", "Sun",   3.88,   163.72, 30.05,  5.9485, color.white           ],
                ["Moon",    "Earth", 0.273,  0.0748, 0.0026, 3.0863, color.white           ]      //Must be after Earth
           ]
