//Solar System Body Descriptions (as of Jan 1, 2016)
//          [Name       radius  Period  dist    theta0  color                   parent
//          [text,      (R_E)   (yr)    (AU)    (rad)   (vecRGB)                (#)
var SSBd = [    ["Mercury", 0.382,  0.2408, 0.387,  0.5069, vec(0.980,0.973,0.949), null],      #vec(0.980,0.973,0.949), 
            ["Venus",   0.949,  0.6152, 0.723,  3.2387, color.white,            null],
            ["Earth",   1.000,  1.0000, 1.000,  1.7561, color.white,            null],      #Must be fourth in list.
            ["Mars",    0.532,  1.8808, 1.524,  3.0577, color.white,            null],
            ["Jupiter", 11.19,  11.86,  5.203,  2.8746, color.white,            null],
            ["Saturn",  9.26,   29.41,  9.582,  4.3066, color.white,            null],
            ["Uranus",  4.01,   84.04,  19.20,  0.3127, color.white,            null],
            ["Neptune", 3.88,   163.72, 30.05,  5.9485, color.white,            null],
            ["Moon",    0.273,  0.0748, 0.0026, 3.0863, color.white,            3   ]      #Must be after Earth
       ]
