import React, { useEffect, useState } from 'react';
import styles from '../styles/End.module.css';
import Link from 'next/link';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });



const EndPage: React.FC = () => {

    const [score, setScore] = useState(0);
    const [showContent, setShowContent] = useState(false);


    useEffect(() => {
        document.body.classList.add('unblur-transition');

        const container = document.querySelector('#end-container');
        if (container) {
            container.classList.add('unblur-transition');
        }

        const contentTimeout = setTimeout(() => {
            setShowContent(true);
            if (container) {
                container.classList.remove('unblur-transition');
            }
        }, 500);

        const existingScores = JSON.parse(localStorage.getItem('scores') || '[]');
        const lastScore = existingScores[existingScores.length - 1];
        console.log(lastScore)
        setScore(lastScore.score);
    }, []);

    return (
        <div>
            {showContent && (
                <div className={`${styles.container} ${inter.className}`} id="end-container">
                    <div className={styles.content}>
                        <h1 className={styles.title}>Thanks for playing!</h1>

                        <span className={styles.scoreText}>
                            You scored <span className={styles.pulsating}>{score}</span> points.
                        </span>

                        <Link className="ctaButton" href="/game">
                            Play again
                        </Link>
                    </div>
                    <svg version="1.1" className={styles.tree} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1343.201 2230.123" enable-background="new 0 0 1343.201 2230.123"
                        xmlSpace="preserve">
                        <polygon id="shadow" opacity="0.2" fill="#606060" points="665.336,2230.123 -6.536,1843.009 665.615,1462.166 1336.429,1843.009 
  "/>
                        <g className={styles.terrain} >
                            <polygon fill="#664B26" points="1195.731,1243.657 1275.661,1007.472 1115.802,1100.221   " />
                            <polygon fill="#7F5E30" points="1195.471,1243.657 1195.472,1053.847 1115.542,1100.221   " />
                            <polygon fill="#664B26" points="1015.588,1388.531 1095.518,1152.346 935.659,1245.095  " />
                            <polygon fill="#7F5E30" points="1015.329,1388.531 1015.329,1198.72 935.399,1245.095   " />
                            <polygon fill="#664B26" points="1103.951,1389.919 1224.162,1034.704 983.74,1174.195   " />
                            <polygon fill="#7F5E30" points="1103.56,1389.919 1103.56,1104.45 983.349,1174.195   " />
                            <polygon fill="#664B26" points="917.327,1529.175 1050.879,1134.538 783.774,1289.51  " />
                            <polygon fill="#7F5E30" points="917.125,1530.264 919.472,1523.327 915.324,1214.158 783.572,1290.599   " />
                            <polygon fill="#664B26" points="671.146,1620.419 930.672,1170.906 411.62,1170.906   " />
                            <polyline fill="#936A3A" points="672.531,1625.862 411.537,1170.906 672.531,1170.906   " />
                            <polygon fill="#664B26" points="1272.219,1175.648 1342.843,966.96 1201.595,1048.91  " />
                            <polygon fill="#7F5E30" points="1272.398,1175.648 1272.398,1007.935 1201.774,1048.91  " />
                            <g>
                                <polygon fill="#936A3A" points="147.493,1241.479 67.564,1005.294 227.423,1098.042     " />
                                <polygon fill="#7F5E30" points="147.753,1241.479 147.753,1051.668 227.682,1098.042    " />
                                <polygon fill="#936A3A" points="327.636,1386.352 247.707,1150.168 407.566,1242.916    " />
                                <polygon fill="#7F5E30" points="327.896,1386.352 327.896,1196.542 407.825,1242.916    " />
                                <polygon fill="#936A3A" points="239.274,1387.74 119.063,1032.526 359.485,1172.016     " />
                                <polygon fill="#7F5E30" points="239.665,1387.74 239.664,1102.271 359.876,1172.016     " />
                                <polygon fill="#936A3A" points="425.898,1526.996 292.345,1132.359 559.45,1287.331     " />
                                <polygon fill="#7F5E30" points="426.1,1528.086 423.752,1521.149 427.901,1211.979 559.652,1288.42    " />
                                <polygon fill="#936A3A" points="71.006,1173.469 0.382,964.781 141.63,1046.732     " />
                                <polygon fill="#7F5E30" points="70.827,1173.469 70.826,1005.757 141.45,1046.732     " />
                            </g>
                            <polygon fill="#8EC83E" points="671.872,1280.273 0,893.159 672.151,512.316 1342.965,893.16  " />
                            <polygon opacity="0.2" points="581.808,726.093 543.116,703.8 581.824,681.868 620.455,703.8  " />
                            <polygon opacity="0.2" points="501.203,727.903 459.119,703.656 501.221,679.801 543.238,703.656  " />
                            <polygon opacity="0.2" points="672.339,1036.853 423.8,893.652 672.443,752.77 920.59,893.652   " />
                            <g>
                                <polygon fill="#936A3A" points="671.815,648.11 585.453,598.35 671.851,549.397 758.076,598.35    " />
                                <polygon fill="#664B26" points="671.753,648.142 671.753,746.224 671.753,747.264 671.753,844.306 671.753,845.346 
      671.753,943.428 757.377,894.05 757.377,795.968 757.377,794.929 757.377,697.886 757.377,696.846 757.377,598.764    "/>
                                <polygon fill="#7F5E30" points="586.239,598.753 586.239,696.836 586.239,697.875 586.239,794.918 586.239,795.957 
      586.239,894.039 671.862,943.417 671.862,845.335 671.862,844.295 671.862,747.253 671.862,746.213 671.862,648.131     "/>
                            </g>
                            <g>
                                <polygon fill="#8EC83E" points="672.16,355.041 361.54,176.071 672.289,0 982.419,176.071     " />
                                <polygon fill="#6F991F" points="979.903,534.073 671.937,711.671 671.937,355.158 979.903,177.56    " />
                                <polygon fill="#76AF22" points="364.366,534.034 672.331,711.631 672.331,355.118 364.366,177.521     " />
                            </g>
                            <polygon fill="#76AF22" points="0,966.247 671.818,1354.172 671.818,1280.01 0,892.085  " />
                            <polygon fill="#6F991F" points="671.818,1353.459 1343.201,967.336 1343.201,893.174 671.818,1279.297   " />
                            <path fill="#664B26" d="M671.105,1620.157l1.426-449.251L671.105,1620.157z" />
                            <polygon opacity="0.2" points="273.542,856.806 234.851,834.513 273.558,812.581 312.189,834.513  " />
                            <polygon opacity="0.2" points="192.938,858.616 150.854,834.369 192.955,810.514 234.973,834.369  " />
                            <polygon opacity="0.2" points="699.45,1166.161 660.758,1143.868 699.466,1121.936 738.097,1143.868   " />
                            <polygon opacity="0.2" points="618.845,1167.971 576.761,1143.724 618.863,1119.869 660.88,1143.724   " />
                            <polygon opacity="0.2" points="1226.66,898.199 1187.968,875.906 1226.676,853.974 1265.307,875.906   " />
                            <polygon opacity="0.2" points="1146.055,900.009 1103.971,875.761 1146.073,851.906 1188.09,875.761   " />
                            <polygon opacity="0.2" points="948.894,793.628 910.202,771.335 948.91,749.403 987.541,771.335   " />
                            <polygon opacity="0.2" points="868.29,795.438 826.206,771.191 868.307,747.336 910.325,771.191   " />
                        </g>
                    </svg>
                </div>
            )}
        </div>
    );
};

export default EndPage;
