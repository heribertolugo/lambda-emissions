# Lambda Emissions
**TLDR;** Calculates a gas engines Lambda rating (air:fuel ratio) based on a old equation used by VolksWagon that I found in an automotive magazine. It is one of the many variants of the Brettshneider equation. more info [here](https://www.austincc.edu/wkibbe/lambda.htm) or view [austincc.edu_wkibbe_lambda.htm.pdf](https://github.com/heribertolugo/EmissionsLambda/blob/main/austincc.edu_wkibbe_lambda.htm.pdf) or [09A_Alt-Fuels-Brettschneider-Series-3](https://github.com/heribertolugo/EmissionsLambda/blob/main/09A_Alt-Fuels-Brettschneider-Series-3.pdf)

# Summary
This is a new working (in progress) Angular version of an old Vanilla JS/HTML app made circa 2005 for IE 5+. \
The original version can be found [here](https://github.com/heribertolugo/EmissionsLambda).

Using the Brettshneider Lambda equation, given a set of values, one could determine if the vehicle is running rich, lean or stoichiometric. \
The Lambda rating also tells you how far off the vehicle is from stoichiometry, stoichiometric being 1 (optimal - perfect combustion with air/fuel ratio 14.7:1).\
This knowledge can help diagnose a vehicle for emissions failures. An expensive diagnostic machine need not be used if you have the failed emissions report and access to this app.\
A keen technician can claim to be able to determine rich or lean condition just by reading the failed emission report, but there are many scenarios where that judgement can be wrong.\

you can use the following values to test: HC: 834 ppm, CO: .01%, CO2: 13.78%, O2: 2.29%\
result should be: Lambda = 1.076, AFR = 15.817:1, Status = Lean


![lambda](https://github.com/heribertolugo/lambda-emissions/assets/26213368/5b78c6d8-5ba4-42ab-890e-94dbee62e63c)


![image](https://github.com/heribertolugo/lambda-emissions/assets/26213368/1ff7264e-8ad0-4f5b-8ae7-b13d7c44d2ed)


![image](https://github.com/heribertolugo/lambda-emissions/assets/26213368/66dfb97a-b651-49c0-83a4-0fe74146797b)
