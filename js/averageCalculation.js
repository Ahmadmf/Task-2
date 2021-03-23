//----------------------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------------------
//--------------------- Function of this file is to select measurement and do calculation for average and error ----------------------------------
//----------------------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------------------



//-----------------------------------------------------23 branching fraction from gsoc_hflav.json------------------------------------------------
var data = [
    {
      "name": "BR_Lambdab0_K-_D0_p.-BR_Lambdab0_pi-_D0_p",
      "latex": "\\frac{{\\cal{B}} ( \\Lambda_b^{0} \\to D^{0} p K^{-} ) }{ {\\cal{B}} ( \\Lambda_b^{0} \\to D^{0} p \\pi^{-} )}",
      "category": "Bbaryon/D",
      "average": 0.07840881240362992,
      "error": 0.008607155901120699,
      "measurements": [
          {
              "value": 0.073,
              "error": 0.011169491020860955
          },
          {
              "value": 0.112,
              "error": 0.025998451891820918
          }
      ]
  },
  {
      "name": "BR_Lambdab0_p_K-_chic2.-BR_Lambdab0_p_K-_chic1",
      "latex": "\\frac{ {\\cal{B}}( \\Lambda_b^0 \\to \\chi_{c2} p K^- ) }{ {\\cal{B}}( \\Lambda_b^0 \\to \\chi_{c1} p K^- ) }",
      "category": "Bbaryon/cc",
      "average": 1.02,
      "error": 0.11419055689206256,
      "measurements": [
          {
              "value": 1.02,
              "error": 0.11532562594670798
          }
      ]
  },
  {
      "name": "transv_polarb_Lambdab0_Jpsi_Lambda0",
      "latex": "{\\cal{P}}_b ( \\Lambda_b^{0} \\to J/\\psi \\Lambda )",
      "category": "Bbaryon/cc",
      "average": 0.008041697795487801,
      "error": 0.08428226162622461,
      "measurements": [
          {
              "value": 0.6000000000000001,
              "error": 0.7549834435270751
          },
          {
              "value": 0.0,
              "error": 0.10392304845413264
          }
      ]
  },
  {
      "name": "BR_Lambdab0_SigmacS02520_p_p-.BR_SigmacS02520_Lambdac+_pi-.-BR_Lambdab0_Lambdac+_p_p-_pi-",
      "latex": "\\frac { {\\cal{B}} ( \\Lambda_b^{0} \\to \\Sigma_c(2520)^{*0} p \\bar{p} ) \\times {\\cal{B}} ( \\Sigma_c(2520)^{*0} \\to \\Lambda_c^{+} \\pi^{-} )  }{ {\\cal{B}} ( \\Lambda_b^{0} \\to \\Lambda_c^{+} p \\bar{p} \\pi^{-} ) }",
      "category": "Bbaryon/baryon",
      "average": 1.19,
      "error": 0.2441311123222267,
      "measurements": [
          {
              "value": 1.19,
              "error": 0.2814249455894058
          }
      ]
  },
  {
      "name": "BR_Lambdab0_pi-_Lambdac+2940.BR_Lambdac+2940_D0_p.-BR_Lambdab0_pi-_Lambdac+2880.BR_Lambdac+2880_D0_p",
      "latex": "\\frac{{\\cal{B}} ( \\Lambda_b^{0} \\to \\Lambda_c(2940)^{+} \\pi^{-} ) \\times {\\cal{B}} ( \\Lambda_c(2940)^{+} \\to D^0 p ) }{{\\cal{B}} ( \\Lambda_b^{0} \\to \\Lambda_c(2880)^{+} \\pi^{-} ) \\times {\\cal{B}} ( \\Lambda_c(2880)^{+} \\to D^0 p ) }",
      "category": "Bbaryon/baryon",
      "average": 8.350836872916249,
      "error": 2.8404940196406283,
      "measurements": [
          {
              "value": 8.3,
              "error": 2.8915114239489785
          }
      ]
  },
  {
    "name": "BR_Lambdab0_pi-_Pc4450+.-BR_Lambdab0_K-_Pc4450+",
    "latex": "\\frac{ {\\cal{B}} ( \\Lambda_b^0 \\to \\pi^- P_c(4450)^+ ) }{ {\\cal{B}} ( \\Lambda_b^0 \\to K^- P_c(4450)^+ ) }",
    "category": "Bbaryon/other",
    "average": 0.2728872562336826,
    "error": 0.15338755357394823,
    "measurements": [
        {
            "value": 0.33,
            "error": 0.22951374249436746
        }
    ]
  },
  
  {
    "name": "Deltaperp_B_KS_Jpsi",
    "latex": "\\delta_{\\perp} ( B \\to J/\\psi K^{*} )",
    "category": "B/cc",
    "average": 2.934782335129184,
    "error": 0.023686045405516158,
    "measurements": [
        {
            "value": 2.94,
            "error": 0.034641016151377546
        },
        {
            "value": 2.938,
            "error": 0.06554387843269577
        },
        {
            "value": 2.91,
            "error": 0.06557438524302
        }
    ]
  },
  
  {
    "name": "Azero_B_KS_Jpsi",
    "latex": "\\vert{\\cal{A}}_{0}\\vert^{2} ( B \\to J/\\psi K^{*} )",
    "category": "B/cc",
    "average": 0.5640246305418719,
    "error": 0.010015382257908571,
    "measurements": [
        {
            "value": 0.574,
            "error": 0.017492855684535902
        },
        {
            "value": 0.556,
            "error": 0.01676305461424021
        }
    ]
  },
  
  {
    "name": "BR_B_D0bar_K_pi0_D0",
    "latex": "{\\cal{B}} ( B \\to D^{0} \\bar{D}^{0} \\pi^{0} K )",
    "category": "B/DD",
    "average": 0.00127,
    "error": 0.00043913663366419806,
    "measurements": [
        {
            "value": 0.00127,
            "error": 0.0005359482417626411
        }
    ]
  },
  
  {
    "name": "BR_B_X3872_K.BR_X3872_D0bar_DS0",
    "latex": "{{\\cal{B}} ( B \\to X(3872) K )\\times {\\cal{B}} ( X(3872) \\to D^{*}(2007)^{0} \\bar{D}^{0} )}",
    "category": "B/other",
    "average": 0.0008,
    "error": 0.00022360679774997892,
    "measurements": [
        {
            "value": 0.0008,
            "error": 0.00024494897427831784
        }
    ]
  },
  
  {
    "name": "BR_B0bar_pi-_DS+",
    "latex": "{\\cal{B}} ( \\bar{B}^{0} \\to D^{*}(2010)^{+} \\pi^{-} )",
    "category": "Bd/D",
    "average": 0.025816613658206238,
    "error": 0.0012511388980253558,
    "measurements": [
        {
            "value": 0.0222,
            "error": 0.002716615541441225
        },
        {
            "value": 0.029900000000000003,
            "error": 0.0041
        },
        {
            "value": 0.0279,
            "error": 0.0025347583711273153
        }
    ]
  },
  
  {
    "name": "BR_B0bar_Ds-_pi+",
    "latex": "{\\cal{B}} ( \\bar{B}^{0} \\to D_s^{-} \\pi^{+} )",
    "category": "Bd/D",
    "average": 0.00021719870791779377,
    "error": 2.5152622957785196e-05,
    "measurements": [
        {
            "value": 0.00024,
            "error": 0.00013622169126950714
        },
        {
            "value": 0.000199,
            "error": 3.6386810797320505e-05
        },
        {
            "value": 0.00025,
            "error": 4.882622246293482e-05
        }
    ]
  },
  
  {
    "name": "BR_B0bar_Ds-_DS+",
    "latex": "{\\cal{B}} ( \\bar{B}^{0} \\to D_s^{-} D^{*}(2010)^{+} )",
    "category": "Bd/DD",
    "average": 0.06824963715529844,
    "error": 0.015955694280043998,
    "measurements": [
        {
            "value": 0.056999999999999995,
            "error": 0.020445048300260872
        },
        {
            "value": 0.10300000000000001,
            "error": 0.04342810150121693
        }
    ]
  },
  
  
  {
    "name": "BR_B0bar_D-_D+",
    "latex": "{\\cal{B}} ( \\bar{B}^{0} \\to D^{+} D^{-} )",
    "category": "Bd/DD",
    "average": 0.002171120672838302,
    "error": 0.00017158326189828285,
    "measurements": [
        {
            "value": 0.0021200000000000004,
            "error": 0.00030066592756745815
        },
        {
            "value": 0.00321,
            "error": 0.0008863972021616494
        },
        {
            "value": 0.00197,
            "error": 0.00034641016151377546
        },
        {
            "value": 0.0028,
            "error": 0.0008154753215150045
        }
    ]
  },
  
  {
    "name": "BR_B0bar_pbar_pi-_SigmaSc++",
    "latex": "{\\cal{B}} ( \\bar{B}^{0} \\to \\Sigma_c^{*++} \\bar{p} \\pi^{-} )",
    "category": "Bd/baryon",
    "average": 0.0012162551334494766,
    "error": 0.00023028382770126217,
    "measurements": [
        {
            "value": 0.0012,
            "error": 0.0005196152422706631
        },
        {
            "value": 0.00163,
            "error": 0.0008954175982749683
        },
        {
            "value": 0.00115,
            "error": 0.00044158804331639233
        }
    ]
  },
  
  {
    "name": "BR_B0bar_K0bar_X3872.BR_X3872_gamma_psi2S",
    "latex": "{{\\cal{B}} ( \\bar{B}^{0} \\to X(3872) \\bar{K}^{0} )\\times {\\cal{B}} ( X(3872) \\to \\psi(2S) \\gamma )}",
    "category": "Bd/other",
    "average": 6.946718152092858e-05,
    "error": 1.4458930049659651e-05,
    "measurements": [
        {
            "value": 6.620000000000001e-05,
            "error": 1.6743281418925217e-05
        },
        {
            "value": 0.000114,
            "error": 5.678908345800274e-05
        }
    ]
  },
  
  
  {
    "name": "fc.BR_Bc-_Ds-_D0.-fu.BR_B-_Ds-_D0",
    "latex": "\\frac{ f_c \\times {\\cal{B}} ( B_c^- \\to D_s^- D^0 ) } { f_u \\times {\\cal{B}} ( B^- \\to D_s^- D^0 ) }",
    "category": "Bc/DD",
    "average": 0.003,
    "error": 0.0036999999999999997,
    "measurements": [
        {
            "value": 0.003,
            "error": 0.0037
        }
    ]
  },
  
  
  {
    "name": "BR_Bc-_Jpsi_DSs-.-BR_Bc-_Jpsi_pi-",
    "latex": "\\frac {{\\cal{B}} (B_c^{-} \\to J/\\psi D_s^{*-})} {{\\cal{B}} (B_c^{-} \\to J/\\psi \\pi^{-})}",
    "category": "Bc/cc",
    "average": 10.4,
    "error": 3.4957116577488523,
    "measurements": [
        {
            "value": 10.4,
            "error": 3.8509739027939416
        }
    ]
  },
  
  {
    "name": "sigma_Bc-.-sigma_B-.BR_Bc-_chic0_pi-",
    "latex": "{\\frac{f_c}{f_u}} \\times {\\cal{B}} ( B_c^{-} \\to \\chi_{c0} \\pi^{-} )",
    "category": "Bc/cc",
    "average": 9.800000000000001e-05,
    "error": 3.2989960300244873e-05,
    "measurements": [
        {
            "value": 9.800000000000001e-05,
            "error": 3.3947692409050315e-05
        }
    ]
  },
  
  
  {
    "name": "BR_Bc+_Bs_pi+",
    "latex": "\\frac{f_c}{f_s}  \\times {\\cal B} ( B_c^{+} \\to  B_s^{0}\\pi^{+} )",
    "category": "Bc/B",
    "average": 0.023700000000000002,
    "error": 0.0036169794090880054,
    "measurements": [
        {
            "value": 0.023700000000000002,
            "error": 0.004072873427239972
        }
    ]
  },
  
  {
    "name": "BR_B-_K-_psi2S",
    "latex": "{\\cal{B}} ( B^{-} \\to \\psi(2S) K^{-} )",
    "category": "Bu/cc",
    "average": 0.0063140069398697676,
    "error": 0.0003372024205625329,
    "measurements": [
        {
            "value": 0.006900000000000001,
            "error": 0.0006
        },
        {
            "value": 0.0064,
            "error": 0.0011489125293076055
        },
        {
            "value": 0.0055,
            "error": 0.0013114877048604002
        },
        {
            "value": 0.004900000000000001,
            "error": 0.0016970562748477142
        },
        {
            "value": 0.00617,
            "error": 0.0006664082832618455
        }
    ]
  },
  {
    "name": "BR_B-_K-_Jpsi",
    "latex": "{\\cal{B}} ( B^{-} \\to J/\\psi K^{-} )",
    "category": "Bu/cc",
    "average": 0.010044657232388891,
    "error": 0.00032500836956921264,
    "measurements": [
        {
            "value": 0.0101,
            "error": 0.0010295630140987001
        },
        {
            "value": 0.0089,
            "error": 0.0009273618495495703
        },
        {
            "value": 0.0101,
            "error": 0.0012369316876852982
        },
        {
            "value": 0.0081,
            "error": 0.0016340134638368193
        },
        {
            "value": 0.01061,
            "error": 0.0006649060083951716
        }
    ]
  },
  {
    "name": "BR_B-_pbar_pi-_Lambdac+",
    "latex": "{\\cal{B}} ( B^{-} \\to \\Lambda_c^{+} \\bar{p} \\pi^{-} )",
    "category": "Bu/baryon",
    "average": 0.0024573478406857948,
    "error": 0.0005545091397385977,
    "measurements": [
        {
            "value": 0.0018700000000000001,
            "error": 0.0008996677855655199
        },
        {
            "value": 0.0033799999999999998,
            "error": 0.0012617448236470004
        }
    ]
  },
  ];
//----------------------------------------------------------------------------------------------------------------------------------------------//


window.addEventListener('load', () => {

//----------------------------------------Doing Average Calculation for Selcted Measurement by User-------------------------------------------//
    var lengthMeasurementData;
    $("form").submit(function(event){
       var totalCheckedBoxes=0;
       var totalValueSum=0;
       var totalErrorSum=0;
        for(measurementsIndex=0;measurementsIndex<lengthMeasurementData;measurementsIndex++){
            var checkBox=document.getElementById(measurementsIndex.toString());
            if(checkBox.checked==true){
                totalCheckedBoxes++;
                var measurementData=checkBox.value;
                measurementData=measurementData.split("/");
                var val=parseFloat(measurementData[0]);
                var error=parseFloat(measurementData[1]);
                totalValueSum+=val;
                totalErrorSum+=error;
            }
        }
        var finalAverage,finalError;
        if(totalCheckedBoxes!=0){
            finalAverage=totalValueSum/totalCheckedBoxes;
            finalError=totalErrorSum/totalCheckedBoxes;
        }
        else{
            finalAverage=0;
            finalError=0;
        }
        console.log(finalAverage);
        console.log(finalError);
        document.getElementById('result').innerHTML="Calculated Average=    "+finalAverage+"            Calculated Error=   "+finalError;
        console.log("FORM sUMBITTED")
    })
//-------------------------------------------------------------------------------------------------------------------------------------------------//


//-------access BrachingFractionName that is passed in localStorage from main.js and fetch branchingFractionValue from gsoc_flavon.json data---------------------------------------
    var branchingFractionName = localStorage.getItem('BranchingFractionName');
    console.log(branchingFractionName);
    var branchingFractionValue;
    for(i=0;i<data.length;i++){
        if(data[i].name===branchingFractionName){
            branchingFractionValue=data[i];
            break;
        }
    }
//--------------------------------Display 'name', 'latex', 'category', 'average' and 'error' in averageCalculation.html page----------------------------------------------------------------------------------
    document.getElementById('name').innerHTML=branchingFractionValue.name;
    document.getElementById('latex').innerHTML=branchingFractionValue.latex;
    document.getElementById('category').innerHTML=branchingFractionValue.category;
    document.getElementById('average').innerHTML=branchingFractionValue.average;
    document.getElementById('error').innerHTML=branchingFractionValue.error;
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


//---------------------------------------Dynamically display all measurements  in averageCalculaton.html page--------------------------------------------------------------------------------------
    console.log(branchingFractionValue.measurements);
    var measuremenstHTML = [];
    lengthMeasurementData=branchingFractionValue.measurements.length;
    for(measurementsIndex=0;measurementsIndex<branchingFractionValue.measurements.length;measurementsIndex++){
        var average=branchingFractionValue.measurements[measurementsIndex].value;
        var error=branchingFractionValue.measurements[measurementsIndex].error;
        var finalVal=average.toString()+'/'+error.toString();
        var measurementNumber=measurementsIndex+1;
        measuremenstHTML.push("<p>Measurement "+measurementNumber+"</p>");
        measuremenstHTML.push("<input type='checkbox' id="+measurementsIndex+" value="+finalVal+">");
        measuremenstHTML.push("<label for="+measurementsIndex+">Value:"+branchingFractionValue.measurements[measurementsIndex].value+"   Error:"+branchingFractionValue.measurements[measurementsIndex].error+"</label>");
        measuremenstHTML.push("<br>");
    }
    measuremenstHTML.push("<input type='submit' value='Caculate'>")
    $('#measurementsDataForm').append(measuremenstHTML.join(''));
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

})