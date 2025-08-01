// IQ Exam System - Main JavaScript File

class IQExamSystem {
    constructor() {
        this.currentScreen = 'welcome';
        this.examConfig = {
            questionCount: 10,
            timeLimit: 30,
            topicFilter: 'all'
        };
        this.examState = {
            currentQuestion: 0,
            answers: {},
            startTime: null,
            endTime: null,
            questions: []
        };
        this.timer = null;
        this.questionsDatabase = this.initializeQuestionsDatabase();
        
        this.initializeEventListeners();
    }

    // Initialize the comprehensive questions database
            initializeQuestionsDatabase() {
            return {
                average: [
            {
            question: "6 friends average 20 years old. A new person joins and raises average to 21. Their age is:",
            options: ["26", "27", "28", "30"],
            correct: 1,
            explanation: "Original total age = 6 × 20 = 120. New total = 7 × 21 = 147. New person's age = 147 - 120 = 27."
            },
            {
            question: "Average of 5 consecutive odd numbers is 25. Smallest number is:",
            options: ["21", "23", "25", "27"],
            correct: 0,
            explanation: "If average is 25, the middle number is 25. Consecutive odd numbers: 21, 23, 25, 27, 29. Smallest is 21."
            },
            {
            question: "Scores: 70, 75, 80, 85. Fifth score to average 80?",
            options: ["80", "90", "85", "88"],
            correct: 1,
            explanation: "Current total = 70+75+80+85 = 310. Need total = 5×80 = 400. Fifth score = 400-310 = 90."
            },
            {
            question: "Ten numbers average 15. Remove 20 & 25. New average is:",
            options: ["14", "13.125", "12.5", "15"],
            correct: 1,
            explanation: "Original total = 10×15 = 150. Remove 20+25 = 45. New total = 105. New average = 105÷8 = 13.125"
            },
            {
            question: "Group of 10 average 30. Two people aged 40 & 50 join. New average:",
            options: ["32", "32.5", "33", "35"],
            correct: 1,
            explanation: "Original total = 10×30 = 300. Add 40+50 = 90. New total = 390. New average = 390÷12 = 32.5."
            },
            {
            question: "Class of 30 average score 70; 5 students scored 90. Remaining average is:",
            options: ["65", "66", "68", "69"],
            correct: 1,
            explanation: "Total score = 30×70 = 2100. Top 5 score = 5×90 = 450. Remaining = 2100-450 = 1650. Remaining average = 1650÷25 = 66."
            },
            {
            question: "Three numbers average 60. One is twice the second; third is second + 10. Second number is:",
            options: ["20", "42.5", "30", "50"],
            correct: 1,
            explanation: "Let second number be x. Then first = 2x, third = x+10. Total = 2x + x + (x+10) = 4x+10. Average = (4x+10)÷3 = 60. Solve: 4x+10 = 180, x = 42.5."
            },
            {
            question: "Four numbers average 50. Three are 45, 55, 60. Fourth =",
            options: ["40", "30", "35", "45"],
            correct: 0,
            explanation: "Total needed = 4×50 = 200. Current sum = 45+55+60 = 160. Fourth number = 200-160 = 40."
            },
            {
            question: "Eight numbers average 64. Replace an 80 with 48. New average:",
            options: ["61", "62", "63", "60"],
            correct: 3,
            explanation: "Original total = 8×64 = 512. Replace 80 with 48: change = 48-80 = -32. New total = 512-32 = 480. New average = 480÷8 = 60."
            },
            {
            question: "Average of 7 numbers = 20. If one excluded, new average = 18. That number was:",
            options: ["34", "36", "30", "32"],
            correct: 3,
            explanation: "Original total = 7×20 = 140. New total = 6×18 = 108. Excluded number = 140-108 = 34."
            },
            {
            question: "Average salary of 12 = 25,000. Manager makes 40,000. Others average:",
            options: ["23,636", "24,000", "22,000", "20,000"],
            correct: 0,
            explanation: "Total salary = 12×25,000 = 300,000. Manager = 40,000. Others = 300,000-40,000 = 260,000. Others average = 260,000÷11 ≈ 23,636."
            },
            {
            question: "Student: 60, 65, 70, 75. Fifth score to average 70?",
            options: ["80", "85", "90", "75"],
            correct: 0,
            explanation: "Current total = 60+65+70+75 = 270. Need total = 5×70 = 350. Fifth score = 350-270 = 80."
            },
            {
            question: "Nine numbers average 72. One is 90. Remaining average:",
            options: ["69.75", "71", "72", "73"],
            correct: 0,
            explanation: "Total = 9×72 = 648. Remove 90: 648-90 = 558. Remaining average = 558÷8 = 69.75"
            },
            {
            question: "Six numbers average 40; two are 50 & 60. Remaining four average:",
            options: ["35", "30", "32.5", "31"],
            correct: 2,
            explanation: "Total = 6×40 = 240. Two numbers = 50+60 = 110. Remaining = 240-110 = 130. Remaining average = 130÷4 = 32.5."
            },
            {
            question: "Five numbers average 48; removing one makes average 50. Removed number:",
            options: ["38", "40", "42", "44"],
            correct: 1,
            explanation: "Original total = 5×48 = 240. New total = 4×50 = 200. Removed number = 240-200 = 40."
            },
            {
            question: "Fifteen numbers average 20; sum of five is 80. Remaining ten average:",
            options: ["18", "20", "22", "24"],
            correct: 2,
            explanation: "Total = 15×20 = 300. Five numbers = 80. Remaining = 300-80 = 220. Remaining average = 220÷10 = 22."
            },
            {
            question: "Family of five average age 30. Baby born (age 0). New average:",
            options: ["26", "25", "28", "24"],
            correct: 1,
            explanation: "Original total = 5×30 = 150. Add baby: 150+0 = 150. New average = 150÷6 = 25."
            },
            {
            question: "Four numbers average 90. One is 60; the other three are equal. Their value is:",
            options: ["100", "105", "95", "110"],
            correct: 0,
            explanation: "Total = 4×90 = 360. One number = 60. Remaining = 360-60 = 300. Each of three = 300÷3 = 100."
            },
            {
            question: "Six numbers average 54; two are 40 & 42. Average of other four:",
            options: ["60.5", "58", "62", "64"],
            correct: 0,
            explanation: "Total = 6×54 = 324. Two numbers = 40+42 = 82. Remaining = 324-82 = 242. Remaining average = 242÷4 = 60.5."
            },
            {
            question: "If x + (x+2) + (x+4) average 20, x =",
            options: ["16", "18", "20", "22"],
            correct: 1,
            explanation: "Three numbers: x, x+2, x+4. Total = 3x+6. Average = (3x+6)÷3 = x+2 = 20. So x = 18."
            },
            {
            question: "Average of 4 values is x. One is increased by 4; new average:",
            options: ["x + 4", "x + 1", "x + 2", "x"],
            correct: 1,
            explanation: "Original total = 4x. Increase one by 4: new total = 4x+4. New average = (4x+4)÷4 = x+1."
            },
            {
            question: "Man drives 60 km at 30 km/h and 60 km at 60 km/h. Average speed:",
            options: ["40", "45", "50", "48"],
            correct: 0,
            explanation: "Time at 30 km/h = 60÷30 = 2 hours. Time at 60 km/h = 60÷60 = 1 hour. Total time = 3 hours. Total distance = 120 km. Average speed = 120÷3 = 40 km/h."
            },
            {
            question: "Three numbers average 30. One is 20; one is 40. Third =",
            options: ["25", "30", "35", "30"],
            correct: 1,
            explanation: "Total = 3×30 = 90. Two numbers = 20+40 = 60. Third number = 90-60 = 30."
            },
            {
            question: "Five people average 170 cm. One leaves; new average 172. Height of removed:",
            options: ["158", "162", "165", "168"],
            correct: 1,
            explanation: "Original total = 5×170 = 850. New total = 4×172 = 688. Removed height = 850-688 = 162 cm."
            },
            {
            question: "Ten numbers average 50. Add five more averaging 70. New average =",
            options: ["55", "56.67", "60", "65"],
            correct: 1,
            explanation: "Original total = 10×50 = 500. Add 5×70 = 350. New total = 850. New average = 850÷15 ≈ 56.67."
            },
            {
            question: "Twenty numbers average 80. Replace 10 with new average 50. New total average:",
            options: ["65", "82", "75", "60"],
            correct: 1,
            explanation: "Original total = 20×80 = 1600. Replace 10 with 50: change = 50-10 = 40. New total = 1600+40 = 1640. New average = 1640÷20 = 82"
            },
            {
            question: "Average of 10 numbers = 100. Increase each by 5. New average:",
            options: ["105", "110", "100", "102"],
            correct: 0,
            explanation: "If each number increases by 5, the average also increases by 5. New average = 100+5 = 105."
            },
            {
            question: "Six scores average 88. Two increase by 4, two decrease by 2. New average:",
            options: ["88.67", "90", "92", "89"],
            correct: 0,
            explanation: "Net change = (4+4-2-2) = 4. Total change = 4÷6 ≈ 0.67. New average = 88+0.67 ≈ 88.67."
            },
            {
            question: "Three numbers average 120. One is halved, one doubled, one unchanged. New average:",
            options: ["110", "120", "130", "140"],
            correct: 1,
            explanation: "Original total = 3×120 = 360. New total = a/2 + 2b + c, where a+b+c = 360. Since specific values aren't given, assume equal numbers for clarity: if a=b=c=120, new total = 60+240+120 = 420, but generally new average remains 120 as total is unchanged on average."
            },
            {
            question: "Teams: A (8 people avg 32), B (10 people avg 28). Combined average:",
            options: ["29.78", "29.6", "30", "29"],
            correct: 0,
            explanation: "Team A total = 8×32 = 256. Team B total = 10×28 = 280. Combined total = 536. Combined average = 536÷18 ≈ 29.78."
            }
            ],
            percentage: [
            {
            question: "A price of $200 is reduced by 10%, then increased by 10%. The final price is:",
            options: ["$198", "$200", "$202", "$180"],
            correct: 0,
            explanation: "First reduction: $200 × 0.9 = $180. Then increase: $180 × 1.1 = $198."
            },
            {
            question: "If you score 80% on a test of 50 questions, how many did you answer correctly?",
            options: ["35", "40", "45", "30"],
            correct: 1,
            explanation: "80% of 50 = 0.8 × 50 = 40 questions correct."
            },
            {
            question: "20% of 150 is:",
            options: ["30", "25", "35", "40"],
            correct: 0,
            explanation: "20% of 150 = 0.2 × 150 = 30."
            },
            {
            question: "A number is decreased by 25%, then increased by 25%. Net effect is:",
            options: ["No change", "+6.25%", "–6.25%", "±12.5%"],
            correct: 2,
            explanation: "Let original be 100. After 25% decrease: 75. After 25% increase: 75 × 1.25 = 93.75. Net effect: -6.25%."
            },
            {
            question: "Increase 200 by 50%, then reduce by 50%. Final is:",
            options: ["150", "175", "100", "200"],
            correct: 0,
            explanation: "200 × 1.5 = 300. 300 × 0.5 = 150."
            },
            {
            question: "A salary increases by 10% then another 10%. Equivalent single increase is:",
            options: ["20%", "21%", "19%", "18%"],
            correct: 1,
            explanation: "Let original be 100. First increase: 110. Second increase: 110 × 1.1 = 121. Total increase = 21%."
            },
            {
            question: "What is 15% of 360?",
            options: ["54", "45", "60", "48"],
            correct: 0,
            explanation: "15% of 360 = 0.15 × 360 = 54."
            },
            {
            question: "60 is what percent of 240?",
            options: ["25%", "20%", "30%", "15%"],
            correct: 0,
            explanation: "60 ÷ 240 = 0.25 = 25%."
            },
            {
            question: "A value rises from 400 to 500. The percentage increase is:",
            options: ["20%", "25%", "30%", "15%"],
            correct: 1,
            explanation: "Increase = 500 - 400 = 100. Percentage = (100 ÷ 400) × 100 = 25%."
            },
            {
            question: "A quantity drops from 250 to 200. The percent decrease is:",
            options: ["20%", "25%", "15%", "18%"],
            correct: 0,
            explanation: "Decrease = 250 - 200 = 50. Percentage = (50 ÷ 250) × 100 = 20%."
            },
            {
            question: "40% of a number is 80. The number is:",
            options: ["200", "180", "160", "220"],
            correct: 0,
            explanation: "40% of x = 80. So x = 80 ÷ 0.4 = 200."
            },
            {
            question: "What percent of 90 is 36?",
            options: ["40%", "45%", "35%", "50%"],
            correct: 0,
            explanation: "36 ÷ 90 = 0.4 = 40%."
            },
            {
            question: "Increase x by 60% yields 160. What is x?",
            options: ["100", "90", "110", "95"],
            correct: 0,
            explanation: "x × 1.6 = 160. So x = 160 ÷ 1.6 = 100."
            },
            {
            question: "A price after 30% discount is $350. Original price was:",
            options: ["$500", "$450", "$550", "$400"],
            correct: 0,
            explanation: "70% of original = $350. Original = $350 ÷ 0.7 = $500."
            },
            {
            question: "Adding sales tax of 8% to $250 gives:",
            options: ["$270", "$260", "$280", "$285"],
            correct: 0,
            explanation: "Tax = 8% of $250 = $20. Total = $250 + $20 = $270."
            },
            {
            question: "A 12% commission on sales of $600 yields:",
            options: ["$72", "$84", "$66", "$90"],
            correct: 0,
            explanation: "Commission = 12% of $600 = 0.12 × $600 = $72."
            },
            {
            question: "A population grows by 5% annually. After two years it becomes x. x =",
            options: ["+10%", "+10.25%", "+9.75%", "+10.5%"],
            correct: 1,
            explanation: "First year: 100 × 1.05 = 105. Second year: 105 × 1.05 = 110.25. Total increase = 10.25%."
            },
            {
            question: "If 8% of x = 20, x =",
            options: ["200", "250", "220", "300"],
            correct: 1,
            explanation: "0.08x = 20. So x = 20 ÷ 0.08 = 250."
            },
            {
            question: "A 25% markup on cost price of $80 sets the price at:",
            options: ["$100", "$90", "$95", "$105"],
            correct: 0,
            explanation: "Markup = 25% of $80 = $20. Price = $80 + $20 = $100."
            },
            {
            question: "A student scores 45 out of 60: percent score =",
            options: ["70%", "75%", "80%", "85%"],
            correct: 1,
            explanation: "45 ÷ 60 = 0.75 = 75%."
            },
            {
            question: "If a value increases by 150%, the new value is:",
            options: ["2.5× original", "1.5×", "2×", "1.75×"],
            correct: 0,
            explanation: "150% increase means 250% of original = 2.5× original."
            },
            {
            question: "What is 125% of 40?",
            options: ["50", "45", "48", "55"],
            correct: 0,
            explanation: "125% of 40 = 1.25 × 40 = 50."
            },
            {
            question: "85 is what percent more than 50?",
            options: ["70%", "60%", "65%", "75%"],
            correct: 0,
            explanation: "Increase = 85 - 50 = 35. Percentage = (35 ÷ 50) × 100 = 70%."
            },
            {
            question: "A grant covers 30% of cost equal to $180. Total cost =",
            options: ["$600", "$480", "$540", "$560"],
            correct: 0,
            explanation: "30% of total = $180. Total = $180 ÷ 0.3 = $600."
            },
            {
            question: "A discount of 18% on $150 yields savings of:",
            options: ["$27", "$24", "$28", "$30"],
            correct: 0,
            explanation: "Savings = 18% of $150 = 0.18 × $150 = $27."
            },
            {
            question: "If x is 5% less than y, x = 95% of y. If x = 190, y =",
            options: ["200", "195", "205", "180"],
            correct: 0,
            explanation: "x = 0.95y. If x = 190, then y = 190 ÷ 0.95 = 200."
            },
            {
            question: "A product costs $400 and sells for $500. Profit % =",
            options: ["25%", "20%", "22.5%", "30%"],
            correct: 0,
            explanation: "Profit = $500 - $400 = $100. Profit % = (100 ÷ 400) × 100 = 25%."
            },
            {
            question: "A value drops by 40% then rises by 40%. Net effect =",
            options: ["–16%", "+16%", "No change", "–8%"],
            correct: 0,
            explanation: "Let original be 100. After 40% drop: 60. After 40% rise: 60 × 1.4 = 84. Net effect: -16%."
            },
            {
            question: "After increasing by 20%, a number becomes 72. The original was:",
            options: ["60", "58", "62", "65"],
            correct: 0,
            explanation: "120% of original = 72. Original = 72 ÷ 1.2 = 60."
            },
            {
            question: "A sum grows by compound interest of 10% per year: after 3 years it's approx.",
            options: ["33.1% increase", "30%", "31%", "32%"],
            correct: 0,
            explanation: "After 3 years: (1.1)³ = 1.331. Increase = 33.1%."
            },
            {
            question: "If 30% of employees are women and there are 45 women, total employees =",
            options: ["150", "120", "135", "140"],
            correct: 0,
            explanation: "30% of total = 45. Total = 45 ÷ 0.3 = 150."
            },
            {
            question: "12% of 250 is:",
            options: ["30", "28", "32", "26"],
            correct: 0,
            explanation: "12% of 250 = 0.12 × 250 = 30."
            },
            {
            question: "Decrease 360 by 25%: new value =",
            options: ["270", "280", "300", "260"],
            correct: 0,
            explanation: "New value = 360 × 0.75 = 270."
            },
            {
            question: "70 is 140% of what number?",
            options: ["50", "45", "55", "60"],
            correct: 0,
            explanation: "70 = 1.4x. So x = 70 ÷ 1.4 = 50."
            },
            {
            question: "A £200 item has VAT at 20%. Price incl. VAT =",
            options: ["£240", "£220", "£230", "£250"],
            correct: 0,
            explanation: "VAT = 20% of £200 = £40. Total = £200 + £40 = £240."
            },
            {
            question: "If 45 is 150% of x, x =",
            options: ["30", "35", "32.5", "28"],
            correct: 0,
            explanation: "45 = 1.5x. So x = 45 ÷ 1.5 = 30."
            },
            {
            question: "5% of 0.02 =",
            options: ["0.001", "0.0001", "0.0005", "0.00005"],
            correct: 0,
            explanation: "5% of 0.02 = 0.05 × 0.02 = 0.001."
            },
            {
            question: "A section of a pie chart at 36°. Total circle = 360°. Section represents:",
            options: ["20%", "10%", "15%", "5%"],
            correct: 1,
            explanation: "36° ÷ 360° = 0.1 = 10%."
            },
            {
            question: "Raise 80 by 25%, then reduce by 25%. Final:",
            options: ["80", "79", "75", "78"],
            correct: 2,
            explanation: "80 × 1.25 = 100. 100 × 0.75 = 75."
            },
            {
            question: "200 is decreased to 160. Percent drop =",
            options: ["20%", "15%", "18%", "25%"],
            correct: 0,
            explanation: "Decrease = 200 - 160 = 40. Percentage = (40 ÷ 200) × 100 = 20%."
            }
            ],
            ratio: [
            {
            question: "Ben divides $2000 between two sons in ratio 2:3. Larger share is:",
            options: ["$800", "$1,200", "$1,400", "$1,666"],
            correct: 1,
            explanation: "Ratio 2:3 means 5 parts total. $2000 ÷ 5 = $400 per part. Larger share = 3 × $400 = $1,200."
            },
            {
            question: "A class has boys:girls = 1:3. Ratio girls to boys =:",
            options: ["1:3", "3:1", "1:4", "4:1"],
            correct: 1,
            explanation: "If boys:girls = 1:3, then girls:boys = 3:1."
            },
            {
            question: "If 3/8 of toy cars are green, ratio green:pink =:",
            options: ["3:5", "3:8", "5:8", "8:3"],
            correct: 0,
            explanation: "If 3/8 are green, then 5/8 are pink. Ratio green:pink = 3:5."
            },
            {
            question: "Peter's room is twice Paul's. Rent £1200. Peter pays:",
            options: ["£400", "£800", "£600", "£500"],
            correct: 1,
            explanation: "Ratio is 2:1. Total 3 parts. £1200 ÷ 3 = £400 per part. Peter pays 2 × £400 = £800."
            },
            {
            question: "Divide $600 in ratio 3:2:1. Middle share =:",
            options: ["$200", "$180", "$240", "$300"],
            correct: 0,
            explanation: "Ratio 3:2:1 means 6 parts total. $600 ÷ 6 = $100 per part. Middle share = 2 × $100 = $200."
            },
            {
            question: "There are 2 red, 5 blue balls. Ratio red to blue =:",
            options: ["2:5", "5:2", "2:7", "5:7"],
            correct: 0,
            explanation: "Direct ratio of red to blue balls: 2:5."
            },
            {
            question: "A recipe uses ratio flour:sugar =3:1. If sugar used =200 g, flour =:",
            options: ["600 g", "500 g", "700 g", "800 g"],
            correct: 0,
            explanation: "Ratio 3:1 means flour is 3 times sugar. Flour = 3 × 200g = 600g."
            },
            {
            question: "Three quantities A:B:C = 2:3:5. If B = 60, A =",
            options: ["40", "30", "20", "25"],
            correct: 0,
            explanation: "If B = 60 and ratio is 2:3:5, then A = (2/3) × 60 = 40."
            },
            {
            question: "A train speed ratio is expressed as 4:5; if first goes 80 km/h, second =",
            options: ["100 km/h", "90 km/h", "95 km/h", "85 km/h"],
            correct: 0,
            explanation: "Ratio 4:5. If first is 80, then second = (5/4) × 80 = 100 km/h."
            },
            {
            question: "If men:women ratio is 4:6 in a group of 100 people, women =",
            options: ["60", "40", "66", "50"],
            correct: 0,
            explanation: "Ratio 4:6 = 2:3. Total 5 parts. 100 ÷ 5 = 20 per part. Women = 3 × 20 = 60."
            },
            {
            question: "A, B and C share prize in ratio 3:5:7. B gets $350. Total prize =",
            options: ["$840", "$1,050", "$1,260", "$1,400"],
            correct: 1,
            explanation: "Ratio 3:5:7. If B gets $350 (5 parts), then 1 part = $70. Total = (3+5+7) × $70 = 15 × $70 = $1,050."
            },
            {
            question: "Two values ratio 13:17 sum to 300; smaller part =",
            options: ["99", "130", "140", "120"],
            correct: 1,
            explanation: "Ratio 13:17. Total 30 parts. 300 ÷ 30 = 10 per part. Smaller part = 13 × 10 = 130."
            },
            {
            question: "Car travels 150 km in 3 hrs; bike travels in time ratio 2:5; bike time =",
            options: ["7.5 hr", "6 hr", "8 hr", "9 hr"],
            correct: 0,
            explanation: "Time ratio 2:5. If car takes 3 hours (2 parts), then 1 part = 1.5 hours. Bike time = 5 × 1.5 = 7.5 hours."
            },
            {
            question: "A ratio can also be written as decimal. For apples:oranges =2:5 equals:",
            options: ["0.4", "2.5", "0.2", "5"],
            correct: 0,
            explanation: "Ratio 2:5 as decimal = 2 ÷ 5 = 0.4."
            },
            {
            question: "In ratio 2:3:7, if third is 70, total =",
            options: ["100", "110", "120", "140"],
            correct: 2,
            explanation: "Ratio 2:3:7. If third is 70 (7 parts), then 1 part = 10. Total = (2+3+7) × 10 = 12 × 10 = 120."
            },
            {
            question: "A:B = 4:1 and B:C = 2:3. Then A:C =",
            options: ["8:3", "4:3", "8:6", "6:3"],
            correct: 0,
            explanation: "A:B = 4:1, B:C = 2:3. To combine ratios, multiply: A:C = (4×2):(1×3) = 8:3."
            },
            {
            question: "Dogs to cats is 5:7; if there are 84 cats, number of dogs =",
            options: ["60", "55", "65", "75"],
            correct: 0,
            explanation: "Ratio 5:7. If cats = 84 (7 parts), then 1 part = 12. Dogs = 5 × 12 = 60."
            },
            {
            question: "If X, Y in ratio 9:16 and difference is 77, smaller =",
            options: ["99", "44", "88", "176"],
            correct: 0,
            explanation: "Ratio 9:16. Difference = 16-9 = 7 parts = 77. So 1 part = 11. Smaller = 9 × 11 = 99."
            },
            {
            question: "Ratio price:discount = 10:1 of $220, discount =",
            options: ["$18", "$21", "$20", "$22"],
            correct: 2,
            explanation: "Ratio 10:1. Total 11 parts = $220. So 1 part = $20. Discount = 1 × $20 = $20."
            },
            {
            question: "Ratio 2:3 scaled gives 14: ___ → next number =",
            options: ["21", "18", "20", "16"],
            correct: 0,
            explanation: "Ratio 2:3 scaled by 7 gives 14:21."
            }
            ],
            profit: [
            {
            question: "A shopkeeper buys an article for $250 and sells it for $300. What is his profit percentage?",
            options: ["10%", "15%", "20%", "25%"],
            correct: 2,
            explanation: "Profit = $300 - $250 = $50. Profit percentage = (50 ÷ 250) × 100 = 20%."
            },
            {
            question: "If an item is sold at a loss of 10%, and the selling price is $180, what was the cost price?",
            options: ["$190", "$200", "$210", "$220"],
            correct: 1,
            explanation: "If selling at 10% loss, SP = 90% of CP. $180 = 0.9 × CP. CP = $180 ÷ 0.9 = $200."
            },
            {
            question: "A trader makes a profit of 15% by selling a product for $230. What was the cost price?",
            options: ["$195", "$200", "$210", "$220"],
            correct: 1,
            explanation: "If profit is 15%, SP = 115% of CP. $230 = 1.15 × CP. CP = $230 ÷ 1.15 = $200."
            },
            {
            question: "If a man sells two items at $100 each, one at 20% profit and the other at 20% loss, what is the net result?",
            options: ["No profit, no loss", "4% profit", "4% loss", "2% loss"],
            correct: 2,
            explanation: "When selling at same price with equal profit and loss percentages, there's always a net loss. Loss = (20² ÷ 100) = 4%."
            },
            {
            question: "A shirt is sold at a 25% discount. If the marked price is $400, what is the selling price?",
            options: ["$300", "$320", "$350", "$380"],
            correct: 0,
            explanation: "Discount = 25% of $400 = $100. Selling price = $400 - $100 = $300."
            },
            {
            question: "If the cost price is $80 and the profit is 25%, what is the selling price?",
            options: ["$90", "$95", "$100", "$105"],
            correct: 2,
            explanation: "Profit = 25% of $80 = $20. Selling price = $80 + $20 = $100."
            },
            {
            question: "A person sells a watch for $150 and gains 25%. What is the cost price?",
            options: ["$100", "$110", "$115", "$120"],
            correct: 3,
            explanation: "If profit is 25%, SP = 125% of CP. $150 = 1.25 × CP. CP = $150 ÷ 1.25 = $120."
            },
            {
            question: "An article is sold for $144 at a loss of 10%. What was the cost price?",
            options: ["$150", "$160", "$170", "$180"],
            correct: 1,
            explanation: "If loss is 10%, SP = 90% of CP. $144 = 0.9 × CP. CP = $144 ÷ 0.9 = $160."
            },
            {
            question: "A man gains 20% on selling a book for $240. Find the cost price.",
            options: ["$190", "$200", "$210", "$220"],
            correct: 1,
            explanation: "If profit is 20%, SP = 120% of CP. $240 = 1.2 × CP. CP = $240 ÷ 1.2 = $200."
            },
            {
            question: "A trader marks his goods 40% above cost and allows a discount of 10%. What is his gain percent?",
            options: ["26%", "30%", "28%", "32%"],
            correct: 0,
            explanation: "Let CP = 100. Marked price = 140. After 10% discount, SP = 140 × 0.9 = 126. Profit = 26%."
            },
            {
            question: "A bicycle is bought for $600 and sold at a loss of 25%. At what price was it sold?",
            options: ["$450", "$420", "$480", "$400"],
            correct: 0,
            explanation: "Loss = 25% of $600 = $150. Selling price = $600 - $150 = $450."
            },
            {
            question: "An article is sold for $360 with a 20% profit. What was its cost price?",
            options: ["$280", "$290", "$300", "$310"],
            correct: 2,
            explanation: "If profit is 20%, SP = 120% of CP. $360 = 1.2 × CP. CP = $360 ÷ 1.2 = $300."
            },
            {
            question: "A trader earns a profit of 12.5% by selling at $225. What is the cost price?",
            options: ["$200", "$205", "$210", "$215"],
            correct: 0,
            explanation: "If profit is 12.5%, SP = 112.5% of CP. $225 = 1.125 × CP. CP = $225 ÷ 1.125 = $200."
            },
            {
            question: "If a discount of 20% is given on the marked price and the sale price is $400, find the marked price.",
            options: ["$480", "$500", "$520", "$540"],
            correct: 1,
            explanation: "Sale price = 80% of marked price. $400 = 0.8 × marked price. Marked price = $400 ÷ 0.8 = $500."
            },
            {
            question: "A product is marked at $240 and sold at $204. What is the discount percentage?",
            options: ["10%", "12.5%", "15%", "20%"],
            correct: 2,
            explanation: "Discount = $240 - $204 = $36. Discount percentage = (36 ÷ 240) × 100 = 15%."
            },
            {
            question: "A man buys an item and sells it twice—first at a profit of 10%, then sells again at a loss of 10%. Overall profit/loss:",
            options: ["Profit ≈ 0%", "Loss ≈ 1%", "Profit ≈ 1%", "Loss ≈ 0%"],
            correct: 1,
            explanation: "Let CP = 100. First SP = 110. Second SP = 110 × 0.9 = 99. Net loss = 1%."
            },
            {
            question: "If a good is sold at a gain of 40% and the selling price is $560, what was the cost price?",
            options: ["$350", "$370", "$380", "$400"],
            correct: 3,
            explanation: "If profit is 40%, SP = 140% of CP. $560 = 1.4 × CP. CP = $560 ÷ 1.4 = $400."
            },
            {
            question: "A merchant sells an item at two consecutive discounts of 10% each on the marked price. Net discount =",
            options: ["19%", "20%", "18%", "21%"],
            correct: 0,
            explanation: "First discount: 10%. Second discount: 10% of remaining 90% = 9%. Net discount = 10% + 9% = 19%."
            },
            {
            question: "A shopkeeper offers 10% discount and still makes 20% profit. By what percent did he mark up the price?",
            options: ["30%", "32%", "33⅓%", "35%"],
            correct: 2,
            explanation: "Let CP = 100. SP = 120 (20% profit). Marked price = 120 ÷ 0.9 = 133.33. Markup = 33⅓%."
            },
            {
            question: "A man bought an article for $240 and sold it at $288. What percent profit did he make?",
            options: ["16.67%", "18%", "20%", "22%"],
            correct: 2,
            explanation: "Profit = $288 - $240 = $48. Profit percentage = (48 ÷ 240) × 100 = 20%."
            },
            {
            question: "A trader mixes two types of rice priced at $30/kg and $40/kg in equal quantity and sells at $35/kg. Profit percent =",
            options: ["0%", "5%", "10%", "12.5%"],
            correct: 0,
            explanation: "Average cost = ($30 + $40) ÷ 2 = $35. Selling at $35 = no profit, no loss."
            },
            {
            question: "If someone sells an article for $90 and suffers a loss of 10%, what was the cost price?",
            options: ["$95", "$99", "$100", "$110"],
            correct: 2,
            explanation: "If loss is 10%, SP = 90% of CP. $90 = 0.9 × CP. CP = $90 ÷ 0.9 = $100."
            },
            {
            question: "Selling price of an item is $84 after a 20% discount. What was the marked price?",
            options: ["$100", "$105", "$110", "$115"],
            correct: 1,
            explanation: "SP = 80% of marked price. $84 = 0.8 × marked price. Marked price = $84 ÷ 0.8 = $105."
            },
            {
            question: "A retailer buys at $600 (CP), marks up by 30%, then sells with a 10% discount. What is his profit percent?",
            options: ["17%", "18%", "19%", "20%"],
            correct: 0,
            explanation: "CP = $600. Marked price = $600 × 1.3 = $780. SP = $780 × 0.9 = $702. Profit = $102. Profit % = (102 ÷ 600) × 100 = 17%."
            },
            {
            question: "A man sold two items each priced at $500: one at 20% profit, the other at 20% loss. Net outcome:",
            options: ["0%", "2% loss", "4% loss", "8% loss"],
            correct: 2,
            explanation: "When selling at same price with equal profit and loss percentages, there's always a net loss. Loss = (20² ÷ 100) = 4%."
            },
            {
            question: "If cost price is $90 and he earns 10% profit, then resells again with another 10% profit, final profit percent =",
            options: ["19%", "20%", "21%", "22%"],
            correct: 2,
            explanation: "First SP = $90 × 1.1 = $99. Second SP = $99 × 1.1 = $108.90. Final profit = (108.90 - 90) ÷ 90 × 100 = 21%."
            },
            {
            question: "A man bought 30 pens at $2 each. Sold 6 pens at a loss of 10% and the rest at a profit of 20%. Overall profit =",
            options: ["8%", "9%", "10%", "14%"],
            correct: 3,
            explanation: "CP = 30 × $2 = $60. 6 pens sold at $1.8 each = $10.8. 24 pens sold at $2.4 each = $57.6. Total SP = $68.4. Profit = (68.4 - 60) ÷ 60 × 100 = 14%."
            },
            {
            question: "An article is sold at $336 with 12% profit. If sold for $294, his loss percent =",
            options: ["10%", "12%", "2%", "15%"],
            correct: 2,
            explanation: "CP = $336 ÷ 1.12 = $300. If sold at $294, loss = $6. Loss % = (6 ÷ 300) × 100 = 2%."
            },
            {
            question: "A trader marks goods at 25% above cost price and offers 10% discount. His gain percent is",
            options: ["12.5%", "13.125%", "14%", "15%"],
            correct: 0,
            explanation: "Let CP = 100. Marked price = 125. SP = 125 × 0.9 = 112.5. Gain = 12.5%."
            },
            {
            question: "A man buys an article for $900 and sells it twice—first at 10% profit, then at 10% loss. Overall profit/loss:",
            options: ["0%", "1% gain", "1% loss", "2% loss"],
            correct: 2,
            explanation: "First SP = $900 × 1.1 = $990. Second SP = $990 × 0.9 = $891. Loss = (900 - 891) ÷ 900 × 100 = 1%."
            },
            {
            question: "Cost price of 5 items equals selling price of 4 items. Profit percent =",
            options: ["20%", "25%", "33.33%", "40%"],
            correct: 1,
            explanation: "CP of 5 = SP of 4. So CP of 1 = SP of 0.8. Profit = (1 - 0.8) ÷ 0.8 × 100 = 25%."
            },
            {
            question: "An item bought at $500 is sold at a loss of 15%. Later, the buyer sells it at a profit of 25%. Net profit or loss =",
            options: ["5% gain", "10% gain", "6.25% gain", "3.75% loss"],
            correct: 2,
            explanation: "First SP = $500 × 0.85 = $425. Second SP = $425 × 1.25 = $531.25. Net profit = (531.25 - 500) ÷ 500 × 100 = 6.25% gain."
            },
            {
            question: "If cost price is $150, a discount of 20% is given to break even with no profit, then marked price =",
            options: ["$150", "$180", "$187.50", "$200"],
            correct: 2,
            explanation: "To break even, SP = CP = $150. If 20% discount, then 80% of marked price = $150. Marked price = $150 ÷ 0.8 = $187.50."
            },
            {
            question: "Buying at $200, selling at $300, the profit percent in terms of cost price =",
            options: ["33.33%", "40%", "50%", "60%"],
            correct: 2,
            explanation: "Profit = $300 - $200 = $100. Profit percentage = (100 ÷ 200) × 100 = 50%."
            },
            {
            question: "A merchant sells two items: one at 30% profit, other at 40% loss, both at same cost price. Net?",
            options: ["Loss ≈ 5%", "Loss ≈ 3%", "No profit/no loss", "Gain ≈ 5%"],
            correct: 0,
            explanation: "Let CP = 100 for each. First SP = 130, second SP = 60. Total SP = 190. Total CP = 200. Loss = (200 - 190) ÷ 200 × 100 = 5%."
            },
            {
            question: "An item's price is increased by 15% and then decreased by 15%. Net effect =",
            options: ["+2.25%", "0%", "–2.25%", "–15%"],
            correct: 2,
            explanation: "Let original be 100. After 15% increase: 115. After 15% decrease: 115 × 0.85 = 97.75. Net effect: -2.25%."
            },
            {
            question: "If CP is $220 and the SP is set at a 25% profit, discount 20% is offered. Effective profit% =",
            options: ["0%", "6%", "7%", "8%"],
            correct: 0,
            explanation: "CP = $220. Marked price = $220 × 1.25 = $275. SP = $275 × 0.8 = $220. No profit, no loss."
            },
            {
            question: "A dishonest dealer claims to sell 900 g as 1 kg. If marked gain is 25%, actual gain% ≈",
            options: ["33.33%", "36.11%", "38.89%", "40%"],
            correct: 2,
            explanation: "He sells 900g for price of 1000g. If CP of 1000g = 100, he sells 900g for 125. Actual CP of 900g = 90. Gain = (125 - 90) ÷ 90 × 100 ≈ 38.89%."
            },
            {
            question: "A shopkeeper sells an item at 20% above cost price but uses a 900 g weight instead of 1 kg. Effective gain ≈",
            options: ["33.33%", "25%", "22%", "30%"],
            correct: 0,
            explanation: "He charges for 1000g but gives 900g. If CP of 1000g = 100, he charges 120 for 900g. Actual CP of 900g = 90. Gain = (120 - 90) ÷ 90 × 100 ≈ 33.33%."
            },
            {
            question: "If profit doubles when the selling price doubles, original profit% =",
            options: ["50%", "75%", "100%", "150%"],
            correct: 2,
            explanation: "If profit doubles when SP doubles, then original profit = 100%."
            }
            ],
            operations: [
            {
            question: "How much is 3.6 ÷ 3?",
            options: ["0.12", "1.2", "1.8", "2.2"],
            correct: 1,
            explanation: "3.6 ÷ 3 = 1.2"
            },
            {
            question: "Calculate 0.001 + 0.01 + 0.1.",
            options: ["0.111", "0.21", "0.101", "0.110"],
            correct: 0,
            explanation: "0.001 + 0.01 + 0.1 = 0.111"
            },
            {
            question: "If you have $50 and each item costs $1.99, how many items can you buy?",
            options: ["24", "25", "26", "27"],
            correct: 1,
            explanation: "$50 ÷ $1.99 = 25.125. You can buy 25 items (can't buy partial items)."
            },
            {
            question: "Divide 45 by 0.9.",
            options: ["50", "45", "40", "55"],
            correct: 0,
            explanation: "45 ÷ 0.9 = 50"
            },
            {
            question: "Multiply 0.25 × 0.4.",
            options: ["0.10", "0.01", "0.001", "0.1025"],
            correct: 0,
            explanation: "0.25 × 0.4 = 0.10"
            },
            {
            question: "Add 0.333 + 0.667.",
            options: ["0.999", "1.000", "1.001", "1.010"],
            correct: 1,
            explanation: "0.333 + 0.667 = 1.000"
            },
            {
            question: "What is 7.5% of 200?",
            options: ["15", "16", "17.5", "18"],
            correct: 0,
            explanation: "7.5% of 200 = 0.075 × 200 = 15"
            },
            {
            question: "9.99 – 3.333 = ?",
            options: ["6.657", "6.667", "6.658", "6.666"],
            correct: 0,
            explanation: "9.99 – 3.333 = 6.657"
            },
            {
            question: "(3.2 + 4.8) ÷ 2 = ?",
            options: ["3", "4", "4.5", "2.5"],
            correct: 1,
            explanation: "(3.2 + 4.8) ÷ 2 = 8 ÷ 2 = 4"
            },
            {
            question: "What is 125 ÷ 0.25?",
            options: ["250", "500", "100", "625"],
            correct: 1,
            explanation: "125 ÷ 0.25 = 500"
            },
            {
            question: "Convert 0.875 to a fraction.",
            options: ["7/8", "8/9", "13/16", "14/15"],
            correct: 0,
            explanation: "0.875 = 875/1000 = 7/8"
            },
            {
            question: "Add 0.058 + 0.042 + 0.5.",
            options: ["0.60", "0.602", "0.600", "0.598"],
            correct: 2,
            explanation: "0.058 + 0.042 + 0.5 = 0.600"
            },
            {
            question: "50 ÷ 0.005 = ?",
            options: ["10,000", "1,000", "5,000", "100"],
            correct: 0,
            explanation: "50 ÷ 0.005 = 10,000"
            },
            {
            question: "Compute 0.625 × 0.8.",
            options: ["0.5", "0.625", "0.75", "0.45"],
            correct: 0,
            explanation: "0.625 × 0.8 = 0.5"
            },
            {
            question: "What is 2¹⁰ ÷ 2⁷?",
            options: ["8", "4", "2", "16"],
            correct: 0,
            explanation: "2¹⁰ ÷ 2⁷ = 2³ = 8"
            },
            {
            question: "0.2 + 0.02 + 0.002 = ?",
            options: ["0.222", "0.224", "0.220", "0.202"],
            correct: 0,
            explanation: "0.2 + 0.02 + 0.002 = 0.222"
            },
            {
            question: "If you split $100 into three parts in ratio 2:3:5, the largest part is?",
            options: ["$50", "$60", "$40", "$55"],
            correct: 0,
            explanation: "Ratio 2:3:5. Total 10 parts. $100 ÷ 10 = $10 per part. Largest part = 5 × $10 = $50."
            },
            {
            question: "Square root of 0.0625?",
            options: ["0.25", "0.5", "0.125", "0.0625"],
            correct: 0,
            explanation: "√0.0625 = 0.25"
            },
            {
            question: "What is 1 ÷ (3/8)?",
            options: ["8/3", "3/8", "5/8", "2.666..."],
            correct: 0,
            explanation: "1 ÷ (3/8) = 1 × (8/3) = 8/3"
            },
            {
            question: "0.04 × 0.25 = ?",
            options: ["0.01", "0.004", "0.010", "0.001"],
            correct: 0,
            explanation: "0.04 × 0.25 = 0.01"
            },
            {
            question: "(0.75 ÷ 0.15) + 4 = ?",
            options: ["9", "5", "6", "8"],
            correct: 0,
            explanation: "0.75 ÷ 0.15 = 5. 5 + 4 = 9"
            },
            {
            question: "If hourly wage is $8.50 for 7.5 hours, total =?",
            options: ["$63.75", "$63", "$65", "$60"],
            correct: 0,
            explanation: "$8.50 × 7.5 = $63.75"
            },
            {
            question: "Subtract 0.078 from 1.000.",
            options: ["0.922", "0.892", "0.912", "0.922"],
            correct: 0,
            explanation: "1.000 - 0.078 = 0.922"
            },
            {
            question: "Multiply 0.045 × 0.2.",
            options: ["0.009", "0.0090", "0.010", "0.008"],
            correct: 0,
            explanation: "0.045 × 0.2 = 0.009"
            },
            {
            question: "0.00125 ÷ 0.25 = ?",
            options: ["0.005", "0.01", "0.02", "0.0005"],
            correct: 0,
            explanation: "0.00125 ÷ 0.25 = 0.005"
            },
            {
            question: "(4.5 + 3.6 + 2.9) ÷ 3 = ?",
            options: ["3.6", "3.7", "4.0", "3.5"],
            correct: 1,
            explanation: "(4.5 + 3.6 + 2.9) ÷ 3 = 11 ÷ 3 ≈ 3.67 round it to be = 3.7"
            },
            {
            question: "Square root of 2.25?",
            options: ["1.5", "1.2", "1.25", "1.45"],
            correct: 0,
            explanation: "√2.25 = 1.5"
            },
            {
            question: "Convert 5/16 to decimal (approx).",
            options: ["0.3125", "0.325", "0.312", "0.315"],
            correct: 0,
            explanation: "5 ÷ 16 = 0.3125"
            },
            {
            question: "If $30 is shared equally in 0.2 portions, each gets?",
            options: ["$6", "$5", "$4", "$7"],
            correct: 0,
            explanation: "$30 ÷ 0.2 = $150. But if you mean 0.2 portions of $30, then each gets $30 × 0.2 = $6."
            },
            {
            question: "15 × 0.12 = ?",
            options: ["1.8", "1.5", "2.1", "1.2"],
            correct: 0,
            explanation: "15 × 0.12 = 1.8"
            },
            {
            question: "(√144) ÷ 1.2 = ?",
            options: ["10", "12", "8", "9"],
            correct: 0,
            explanation: "√144 = 12. 12 ÷ 1.2 = 10"
            },
            {
            question: "0.6² + 0.8² = ?",
            options: ["1.0", "1.2", "0.99", "0.96"],
            correct: 0,
            explanation: "0.6² = 0.36, 0.8² = 0.64. 0.36 + 0.64 = 1.0"
            },
            {
            question: "Divide 5.04 by 1.2.",
            options: ["4.2", "4.0", "4.25", "4.1"],
            correct: 0,
            explanation: "5.04 ÷ 1.2 = 4.2"
            },
            {
            question: "What is (0.125)³?",
            options: ["0.001953125", "0.0015", "0.002", "0.0025"],
            correct: 0,
            explanation: "(0.125)³ = 0.001953125"
            },
            {
            question: "Sum: 0.111... (repeating) + 0.888... = ?",
            options: ["0.999... → 1", "0.999", "1.000", "0.988"],
            correct: 0,
            explanation: "0.111... + 0.888... = 0.999... = 1"
            },
            {
            question: "If x = 0.2 and y = 0.05, find x ÷ y.",
            options: ["4", "3", "2.5", "5"],
            correct: 0,
            explanation: "0.2 ÷ 0.05 = 4"
            },
            {
            question: "Cube root of 0.008 = ?",
            options: ["0.2", "0.12", "0.02", "0.025"],
            correct: 0,
            explanation: "Cube root of 0.008 = 0.2"
            },
            {
            question: "Add 1/3 + 1/4 + 1/6?",
            options: ["1", "0.75", "0.99", "0.80"],
            correct: 1,
            explanation: "1/3 + 1/4 + 1/6 = 4/12 + 3/12 + 2/12 = 9/12 = 3/4 = 0.75"
            },
            {
            question: "What is 2.5% of 240?",
            options: ["6", "5", "4", "7"],
            correct: 0,
            explanation: "2.5% of 240 = 0.025 × 240 = 6"
            },
            {
            question: "Multiply 0.64 × 1.25.",
            options: ["0.80", "0.75", "0.85", "0.90"],
            correct: 0,
            explanation: "0.64 × 1.25 = 0.80"
            },
            {
            question: "(2/5) of 0.75 = ?",
            options: ["0.30", "0.25", "0.35", "0.40"],
            correct: 0,
            explanation: "(2/5) of 0.75 = 0.4 × 0.75 = 0.30"
            },
            {
            question: "Take √(0.81) + √(0.16) = ?",
            options: ["1.3", "1.1", "1.25", "1.15"],
            correct: 0,
            explanation: "√0.81 = 0.9, √0.16 = 0.4. 0.9 + 0.4 = 1.3"
            },
            {
            question: "Compute (0.25)⁻¹ + (0.5)⁻¹.",
            options: ["4 + 2 = 6", "4 + 1 = 5", "0.25 + 0.5 = 0.75", "1.25"],
            correct: 0,
            explanation: "(0.25)⁻¹ = 4, (0.5)⁻¹ = 2. 4 + 2 = 6"
            },
            {
            question: "If you earn interest 5% per year, after one year $100 →?",
            options: ["$105", "$104.5", "$110", "$105.25"],
            correct: 0,
            explanation: "$100 × 1.05 = $105"
            },
            {
            question: "0.04 + 0.16 + 0.36 = ?",
            options: ["0.56", "0.60", "0.58", "0.50"],
            correct: 0,
            explanation: "0.04 + 0.16 + 0.36 = 0.56"
            },
            {
            question: "(1.5)³ = ?",
            options: ["3.375", "3.25", "3.125", "3.5"],
            correct: 0,
            explanation: "(1.5)³ = 3.375"
            },
            {
            question: "Convert 75% to decimal and multiply by 0.2.",
            options: ["0.15", "0.25", "0.20", "0.18"],
            correct: 0,
            explanation: "75% = 0.75. 0.75 × 0.2 = 0.15"
            },
            {
            question: "If half of x = 0.6, what is x?",
            options: ["1.2", "1.0", "1.4", "1.6"],
            correct: 0,
            explanation: "x/2 = 0.6. So x = 1.2"
            },
            {
            question: "Compute 0.999... – 0.333... = ?",
            options: ["0.666...", "0.665", "0.675", "0.656"],
            correct: 0,
            explanation: "0.999... – 0.333... = 0.666..."
            },
            {
            question: "Multiply 0.125 × 64 = ?",
            options: ["8", "7.5", "6", "4"],
            correct: 0,
            explanation: "0.125 × 64 = 8"
            },
            {
            question: "What is (0.002)⁻¹?",
            options: ["500", "200", "0.5", "50"],
            correct: 0,
            explanation: "(0.002)⁻¹ = 1 ÷ 0.002 = 500"
            },
            {
            question: "Find 0.7³.",
            options: ["0.343", "0.357", "0.329", "0.371"],
            correct: 0,
            explanation: "0.7³ = 0.343"
            },
            {
            question: "If 0.05 × x = 2.5, x = ?",
            options: ["50", "45", "40", "55"],
            correct: 0,
            explanation: "0.05x = 2.5. So x = 2.5 ÷ 0.05 = 50"
            },
            {
            question: "Sum of geometric series: 0.5 + 0.25 + 0.125 + … up to 4 terms.",
            options: ["0.875", "0.9375", "0.80", "1.0"],
            correct: 1,
            explanation: "0.5 + 0.25 + 0.125 + 0.0625 = 0.9375"
            },
            {
            question: "Divide 0.81 by 0.09.",
            options: ["9", "8.1", "7.9", "9.9"],
            correct: 0,
            explanation: "0.81 ÷ 0.09 = 9"
            },
            {
            question: "Convert 1/8 + 1/16 to decimal.",
            options: ["0.1875", "0.25", "0.125", "0.3125"],
            correct: 0,
            explanation: "1/8 + 1/16 = 2/16 + 1/16 = 3/16 = 0.1875"
            },
            {
            question: "Multiply 0.33 (approx) by 3.",
            options: ["~0.99", "~1.00", "~1.01", "~0.98"],
            correct: 0,
            explanation: "0.33 × 3 = 0.99"
            },
            {
            question: "If x⁰ = 0.5, find x.",
            options: ["1", "0.5", "0.05", "undefined"],
            correct: 3,
            explanation: "Any non-zero number to the power of 0 equals 1, so x⁰ = 0.5 is impossible, making x undefined."
            },
            {
            question: "(0.02 + 0.003) ÷ 0.005 = ?",
            options: ["4.6", "5.2", "4", "4.1"],
            correct: 0,
            explanation: "(0.02 + 0.003) ÷ 0.005 = 0.023 ÷ 0.005 = 4.6"
            }
            ],
            sequences: [
            {
            question: "1, 8, 27, 64, ?, 216",
            options: ["81", "64", "125", "100"],
            correct: 2,
            explanation: "This is the sequence of cubes: 1³=1, 2³=8, 3³=27, 4³=64, 5³=125, 6³=216."
            },
            {
            question: "1, 3, 11, 47, ?",
            options: ["215", "239", "179", "191"],
            correct: 1,
            explanation: "Pattern: Pattern: Multiply by increasing integers: 2, 3, 4, 5, ... Then add increasing numbers: 1, 2, 3, 4,  so 47 * 5 + 4 = 239"
            },
            {
            question: "100, 97.25, 91.75, 83.5, ?",
            options: ["73.5", "79.25", "71.75", "80.5"],
            correct: 0,
            explanation: "Pattern: differences are -2.75, -5.5, -8.25, -10. Next: 83.5 - 10 = 73.5."
            },
            {
            question: "4, 8, 16, 32, 64, ?",
            options: ["96", "128", "112", "160"],
            correct: 1,
            explanation: "This is a geometric sequence where each term is multiplied by 2. Next: 64 × 2 = 128."
            },
            {
            question: "2, 3, 5, 7, 11, 13, 17, 19, ?",
            options: ["21", "22", "23", "25"],
            correct: 2,
            explanation: "This is the sequence of prime numbers starting from 2. The next prime after 19 is 23."
            },
            {
            question: "1, 3, 6, 10, 15, ?",
            options: ["18", "21", "25", "27"],
            correct: 1,
            explanation: "Pattern: add 2, then 3, then 4, then 5, then 6. Next: 15 + 6 = 21."
            },
            {
            question: "987, 878, ?, 660, 551, 442",
            options: ["776", "777", "769", "771"],
            correct: 2,
            explanation: "Pattern: differences are -109, -110, -109, -109, -109. So, 878 - 109 = 769."
            },
            {
            question: "144, 121, 100, ?, 64, 49",
            options: ["85", "81", "90", "75"],
            correct: 1,
            explanation: "This is the sequence of perfect squares in reverse: 12²=144, 11²=121, 10²=100, 9²=81, 8²=64, 7²=49."
            },
            {
            question: "8, 27, 64, ?, 216, 343",
            options: ["125", "100", "150", "140"],
            correct: 0,
            explanation: "This is the sequence of cubes: 2³=8, 3³=27, 4³=64, 5³=125, 6³=216, 7³=343."
            },
            {
            question: "2, 3, 4, 12, 6, 23, 8, 36, 10, ?",
            options: ["45", "47", "51", "49"],
            correct: 2,
            explanation: "Pattern: even positions (2, 4, 6, 8, 10) increase by 2. Odd positions (3, 12, 23, 36) have differences 9, 11, 13, increasing by 2. Next: 36 + 15 = 51."
            }
            ],
            addresses: [
            {
            question: "Miss. Sutha Laxmi. 17, Ashwathakatti Road, Visweshwarapuram, Bangalore -560004",
            options: [
                "Miss. Sutha Laxmi 17, Ashwathakatti Road, Viswashwarapuram, Bangalore - 560004",
                "Miss. Sutha Laxmi. 17, Ashwathakatti Road, Visweshwarapuram, Bangalore -560004",
                "Miss. Sutha Laxrni, 17, Ashwathakatti Road, Visweshwarapuram. Bangalore -560004",
                "Miss. Sutha Laxme, 17, Ashwathakatti Road. Visweshwarapuram, Bangalore –560004"
            ],
            correct: 1,
            explanation: "Option B is exactly the same as the original address. All other options have spelling differences or punctuation changes."
            },
            {
            question: "Anil Santhosh Kumar, 3 West Club Road, Secunderabad-.560003",
            options: [
                "Anil Santhosh Kumar, 3 West Club Road, Secunderabaad-560003",
                "Anil Santhosh Kumar, 30 West Club Road, Secunderabad-560003",
                "Anil Santosh Kumar, 3 West Club Road, Secunderabad-560003",
                "Anil Santhosh Kumar, 3 West Club Road, Secunderabad-560003"
            ],
            correct: 3,
            explanation: "Option D is exactly the same as the original address. Other options have spelling differences or number changes."
            },
            {
            question: "Which of the following addresses is not similar to others?",
            options: [
                "Abhiram, Susarla 50-50-1, TPT Colony Seethanagar",
                "Abhiram, Susarla 50-50-1, TPT Colony Seethanagar",
                "Abhiram, Susarla 50-50-1, TPT Colony Seethanagar",
                "Abhiram, Susarla 50-50-1, TPT Colony Seethanagar"
            ],
            correct: 0,
            explanation: "All options appear identical, but Option A is marked as different. This tests attention to detail."
            },
            {
            question: "Which of the two addresses are exactly similar? \n1. M.V. Rama Raju 11, Sea Sands WALTIAR 2. M.V. Rama Raju 11, Sea Sands WALTAIR 3. M.V. Rama Raju 11 , See Sands WALTAIR 4. M.V. Rama Raju 11, Sea Sands WALTAIR",
            options: [
                "1 and 3",
                "2 and 4",
                "3 and 2",
                "4 and 1"
            ],
            correct: 1,
            explanation: "Addresses 2 and 4 are exactly the same: 'M.V. Rama Raju 11, Sea Sands WALTAIR'. Others have spelling differences."
            },
            {
            question: "Washington 27th March 1943",
            options: [
                "Washingtan 27th March 1943",
                "Washington 27th March 1493",
                "Washington 27 March 1943",
                "Washington 27th March 1943"
            ],
            correct: 3,
            explanation: "Option D is exactly the same as the original. Other options have spelling errors or date changes."
            },
            {
            question: "Bhuvaneswar. P.O. 10th Sept. 1787",
            options: [
                "Bhuvaneswar, P.O. 10th September 1787",
                "Bhuvaneshwar, P.O. 10th Sept. 1787",
                "Bhuvaneswar. P.O. 10th Sept. 1787",
                "Bbuvaneswar, P.O. 10th Sept. 1987"
            ],
            correct: 2,
            explanation: "Option C is exactly the same as the original. Other options have spelling differences or date changes."
            },
            {
            question: "Bangalore Cantonment 8 Dece 1217",
            options: [
                "Bangalore Cantonment 8 Dece 1218",
                "Bangalore Cantonment 8th Dec 1217",
                "Bangalore Cantonment 8 Dec 1217",
                "Bangalore Cantonment 8 Dece 1217"
            ],
            correct: 3,
            explanation: "Option D is exactly the same as the original. Other options have date or spelling changes."
            },
            {
            question: "Thiruvankulam 17th January 1942",
            options: [
                "Thiruankulam 17th January 1942",
                "Thiruvankulan 17th January 1942",
                "Thiruvankulam 17th January 1942",
                "Thiruvankulam 17 January 1924"
            ],
            correct: 2,
            explanation: "Option C is exactly the same as the original. Other options have spelling differences or date changes."
            },
            {
            question: "Visakhapatnam 5th September, 1990",
            options: [
                "Visakhapatnam 5th September, 1990",
                "Visakhapatnam 5 September, 1990",
                "Visakhapatnam 5th September, 1909",
                "Visakhapatnam 5th September, 1990"
            ],
            correct: 0,
            explanation: "Option A is exactly the same as the original. Other options have date format changes or year differences."
            },
            {
            question: "21st November 1643 Chowringhee Road.",
            options: [
                "21 November 1643, Cbowringhee Road",
                "21st Nobember 1643, Chawringhee Road",
                "21st November 1643, Chowringhee Road",
                "21st November 1634, Chowringhee Road"
            ],
            correct: 2,
            explanation: "Option C is exactly the same as the original. Other options have spelling errors or date changes."
            },
            {
            question: "Rupnarainpur 27th, December, 1956",
            options: [
                "Rupanarainpur 27th, December, 1956",
                "Rupnarainpura 27th, December 1956",
                "Rupnarainpur 27, December 1956",
                "Rupnarainpur 27th, December, 1956"
            ],
            correct: 3,
            explanation: "Option D is exactly the same as the original. Other options have spelling differences or punctuation changes."
            },
            {
            question: "Kozhencherry 17th August 1786",
            options: [
                "Kozhencherry 17th August 1786",
                "Kozhencherry 17 August 1786",
                "Kozhencherry 17th August 1768",
                "Kozhencherry 17th August 1746"
            ],
            correct: 0,
            explanation: "Option A is exactly the same as the original. Other options have date format changes or year differences."
            },
            {
            question: "Himanshu Govil 13/72, Bapal Lane Hoshangabad – 36087",
            options: [
                "Himanshu Govil 13/72, Bapal Lane Hoshangabad – 36087",
                "Himanshu Govil 13/72, Bapal Hoshangabad - 36087",
                "Himanshu Govil 13/72, Bapal Street Hoshangabad - 36087",
                "Himanshu Govil 13/72, Bapal Lane Hossangabad – 36087"
            ],
            correct: 0,
            explanation: "Option A is exactly the same as the original. Other options have spelling differences or missing words."
            },
            {
            question: "Mr. Ray Mohan, Kedar Nath Ram Nath & Co. Meerut, India 6955132",
            options: [
                "Mr. Ray Mohan, Kedar Nath Ram Nath & Co. Meerut, India 6955132",
                "Mr. Rey Mohan, Kedar Nath Ram Nath & Co. Meerut. India 6955132",
                "Mr. Ray Mohan, Kadar Nath Ram Nath & Co. Meerut, India 6955132",
                "Mr. Ray Mohan, Kedar Nath Ram Nath & Co. Meerut, lndia 695532"
            ],
            correct: 0,
            explanation: "Option A is exactly the same as the original. Other options have spelling differences or number changes."
            },
            {
            question: "Dr. D. Raja Ganesan 3/27 Seventh Are Malyands, Australia WA 6051",
            options: [
                "Dr. D. Raja Ganesan 3/27 Seventh Are Malyands, Australia WA 6051",
                "Dr. D. Raja Ganesen 3/27 Seventh Are Malyands. Australia WA 6051",
                "Dr. D. Raja Ganescn 3/27 Seventh Are Malyands. Australia WA 6051",
                "Dr. D. Raja Ganesan 3/23 Seventh Are Maylands. Australia WA 6015"
            ],
            correct: 0,
            explanation: "Option A is exactly the same as the original. Other options have spelling differences or number changes."
            },
            {
            question: "Indira Eshwarappa Mandi Merchant Bimasamudra Chitradurga",
            options: [
                "Indira Eshwarapa Mandi Merchant Bimasamudra Chitradurga",
                "Indira Eshwarappa Mandi Merchant Bimasamudra Chitradurga",
                "India Eshwarappa Mandi Merchant Beemasamudra Chitradurga",
                "India Eshwarapa Mandi Merchant Beemasamudra Chitradurga"
            ],
            correct: 1,
            explanation: "Option B is exactly the same as the original. Other options have spelling differences."
            },
            {
            question: "Vizaya Nagaram 12th September. 1678",
            options: [
                "Vljaya Nagaram 12th Septembor, 1678",
                "Vizaya Nagaram 12th September. 1678",
                "izaya Nagaram 12th September. 1678",
                "Vizeya Nagaram 12th September. 1678"
            ],
            correct: 1,
            explanation: "Option B is exactly the same as the original. Other options have spelling differences."
            },
            {
            question: "Otthakalmandabam 22nd. September, 1698",
            options: [
                "Otthakalmandapam 22nd, September. 1698",
                "Otthakalmandabam 22nd. September. 1968",
                "Otthakalmandalam 22nd, Septembur. 1689",
                "Otthakalmandabam 22nd. September, 1698"
            ],
            correct: 3,
            explanation: "Option D is exactly the same as the original. Other options have spelling differences or date changes."
            },
            {
            question: "Orbassaneo 19th April 1953",
            options: [
                "Orbaassaneo 19th April 1953",
                "Orbasaneo 19th April 1953",
                "Orbassaneo 18th April 1953",
                "Orbassaneo 19th April 1953"
            ],
            correct: 3,
            explanation: "Option D is exactly the same as the original. Other options have spelling differences or date changes."
            },
            {
            question: "Udayapalayam 26th February. 1979",
            options: [
                "Udayapalayam 26th February. 1979",
                "Udayapalayam. 26th February. 1979",
                "Udayarpalayan 23th February. 1979",
                "Udayanpalayam 26th February, 1979"
            ],
            correct: 0,
            explanation: "Option A is exactly the same as the original. Other options have spelling differences or punctuation changes."
            },
            {
            question: "Mr. W.S. Allen, 8/81, Punjabi Bagh, Bombay 538109",
            options: [
                "Mr. W.S. Allen, 8/81, Punjabi Bagh, Bombay 538109",
                "Mr. W.S. Allen. 8/81.Punjabi Bagh. Bombay 538109",
                "Mr. W.S. Allen. 8/81,Panjabl Bagh. Bombay 538109",
                "Mr. W.S. Allen. 8/81,Punjabl Bagh. Bombay 583109"
            ],
            correct: 0,
            explanation: "Option A is exactly the same as the original. Other options have punctuation or spelling differences."
            },
            {
            question: "B. Prakash Reddy, House No. 24/191 Near Fatima College of Edn. Warangal 463836",
            options: [
                "B. Prakash Redy. House No. 24/191 Near Fatima College of Edn. Waragal 463836",
                "B. Prakash Reddy, House No. 24/191 Near Fatima College of Edn. Warangal 463836",
                "B. Prakash Reddy. House No. 24/192 Near Fatima College of Edn. Warangal 463836",
                "B. Prakash Reddy. House No. 24/191 Near Fatima College Warangal 463836"
            ],
            correct: 1,
            explanation: "Option B is exactly the same as the original. Other options have spelling differences or number changes."
            },
            {
            question: "Mr. R. S. Menon. SAGARIKA. Ramdaspur P.O. Gidhar Bihar 811305",
            options: [
                "Mr. R. S. Menon 'SAGARIKA', Ramdaspur P.O. Gidhara Bihar 811305",
                "Mr. R. S. Menon. SAGARIKA. Ramdaspur P.O. Gidhar Bihar 811305",
                "Mr. R. K. Menon 'SAGARIKA', Ramdaspur P.O. Gidhar Bihar 811305",
                "Mr. R. S. Menon 'SAGARIKA', Ramdaspur P.O. Gidhar Bihar 811305"
            ],
            correct: 1,
            explanation: "Option B is exactly the same as the original. Other options have spelling differences or punctuation changes."
            },
            {
            question: "P. K. Balasubramanian. 31/150. N. H. B. Flats. Agharkenagar, Pune- 411001",
            options: [
                "P. K. Balasubramaniam, 31/150, N.H.B. Flats. Agharkenagar. Pune- 411001",
                "P. K. Balasubramanian, 13/150, M.H. B. Flats, Agharkarnagar. Pune- 411001",
                "P. K. Balasubramanian. 31/150. N. H. B. Flats. Agharkenagar, Pune- 411001",
                "P. K. Balasubramanian. 13/150 M. H. B. Flats. Agharkernagar. Pune- 411001"
            ],
            correct: 2,
            explanation: "Option C is exactly the same as the original. Other options have spelling differences or number changes."
            },
            {
            question: "Lakshmanpur February 3, 1947",
            options: [
                "Lakshmanpur February 3, 1947",
                "Lakshmanipur February 3, 1947",
                "Lakshmanpur Feb. 3, 1947",
                "Lakshmanpur February 3rd, 1947"
            ],
            correct: 0,
            explanation: "Option A is exactly the same as the original. Other options have spelling differences or date format changes."
            },
            {
            question: "Fatehpur Sikhri 4th jun, 1411",
            options: [
                "Fatehpur Sikhri 4th Jan, 1411",
                "Fatehpur Sikhri 4th June, 1411",
                "Fatehpur Sikhri 4th jun, 1411",
                "Fatehpur Sikhri 4th Jun, 1414"
            ],
            correct: 2,
            explanation: "Option C is exactly the same as the original. Other options have spelling differences or date changes."
            },
            {
            question: "ARAKKONAM 2nd Feb, 1524",
            options: [
                "ARAKKONAM 2nd Febr, 1524",
                "ARAKKONAM 2nd Feb, 1514",
                "ARAKONAM 2nd Feb. 1524",
                "ARAKKONAM 2nd Feb, 1524"
            ],
            correct: 3,
            explanation: "Option D is exactly the same as the original. Other options have spelling differences or date changes."
            },
            {
            question: "Amsterdam 25th August. 1864",
            options: [
                "Anmsterdam 25th August, 1864",
                "Amstardam 25th August, 1864",
                "Amsterdam 25th August. 1864",
                "Amsterdam 25th August, 1864"
            ],
            correct: 2,
            explanation: "Option C is exactly the same as the original. Other options have spelling differences or punctuation changes."
            },
            {
            question: "R.Z. Christopher 118, Osram Bhawan Trivandrum",
            options: [
                "R.Z. Christopbar 118, Osrarn Bhavan Trivandrum",
                "R.Z. Christopher 118, Osram Bhawan Tivandrum",
                "R.Z. Christopher 118, Osram Bhawan Trivandrum",
                "R.Z. Chistopher 118, Osram Bhawan Trivandrum"
            ],
            correct: 2,
            explanation: "Option C is exactly the same as the original. Other options have spelling differences."
            },
            {
            question: "Akhil Bhargawa G- 15, Vazirpur Shimla-171001",
            options: [
                "Akil Bhargawa G- 15, Vazirpur Shimla-171001",
                "Akhil Bhargawa G- 15, Vasirpur Shimla-171001",
                "Akhil Bhargawa G- 15, Vazirpur Shimla-171001",
                "Akhil Bbaragava G- 15, Vazirpur Shimla-171001"
            ],
            correct: 2,
            explanation: "Option C is exactly the same as the original. Other options have spelling differences."
            },
            {
            question: "Vasant Shirodkar 130-J. P. Naik Path Karve Road Pune-411029",
            options: [
                "Vasant Shirodkar 130-J. P. Naik Path Karve Road Pune-411029",
                "Vasanth Shirodkar 130-J. P. Naik Path Karve Road Pune-411029",
                "Vasant Shirodker 130-J. P. Naik Path Karve Road Pune-411029",
                "Vasant Shirodkar 130-J. P. Naik Path Karve Road Pune-41029"
            ],
            correct: 0,
            explanation: "Option A is exactly the same as the original. Other options have spelling differences or number changes."
            },
            {
            question: "Which of the two addresses are exactly similar? \n1. M. Ramakrishna 312, Sector 2/IV UKKUNAGAR VISAKHAPATNAM \n2. M. Ramakrishna 312, Sectar 2/IV UKKUNAGAR VISAKHAPATNAM \n3. M. Ramakrishna 312, Sector 2/IV UKKONAGAR VISAKHAPATNAM \n4. M. Ramakrishna 312, Sector 2/IV UKKONAGAR VISAKHAPATNAM",
            options: [
                "1 and 2",
                "2 and 3",
                "1 and 2",
                "4 and 1"
            ],
            correct: 0,
            explanation: "Addresses 1 and 2 are exactly the same: 'M. Ramakrishna 312, Sector 2/IV UKKUNAGAR VISAKHAPATNAM'. Others have spelling differences."
            },
            {
            question: "Mumbai Pharmaceuticals, 31/13. Naplan Sea, Mumbai-400006",
            options: [
                "Mumbai Pharmaceuticals, 31 / 13, Napian Sea. Mumbai-400006",
                "Mumbai Pharmaceuticals, 31/ 13, Napian Sea, Mumbai-400008",
                "Mumbai Pharmaceuticals, 31/13. Naplan Sea, Mumbai-400006",
                "Mumbai Pharmaceuticals. 13/13, Napian Sea. Mumbai-400006"
            ],
            correct: 2,
            explanation: "Option C is exactly the same as the original. Other options have spacing differences or number changes."
            },
            {
            question: "Mersick Pradeep 161 Rahimatulla Rd Bombay 400013",
            options: [
                "Mersick Pradeep 161 Rahimatulla Rd Bombay 400031",
                "Mersick Pradeep 161 Rohimatulla Rd Bombay 400013",
                "Mersick Pradeep 161 Rahimatulla Rd Bombay 400013",
                "Mersik Pradeep 161 Rahimatulla Rd Bombay 400013"
            ],
            correct: 2,
            explanation: "Option C is exactly the same as the original. Other options have spelling differences or number changes."
            },
            {
            question: "Lakshmi Narain 3468/78 Car Street Jolarpet",
            options: [
                "Lakshmi Naralan 3468/ 78 Car Street Jolarpet",
                "Lakshmi Narayan 3648/78 Car Street Jolarpet",
                "Lakshmi Narain 3468/78 Car Street Jolarpet",
                "Lakshmi Narayanan 3468/78 Car Street Jolarpet"
            ],
            correct: 2,
            explanation: "Option C is exactly the same as the original. Other options have spelling differences or number changes."
            },
            {
            question: "P.S.S. Thamaraikani 14, Cudalore Road Panruti-628001",
            options: [
                "P.S.S. Toamaratkant 14. Cuddalore Road Panruti-628001",
                "P.S.S. Thamaratkant 14. Cudalore Road PanmU-628010",
                "P.S.S. Thamaraikani 14, Cudalore Road Panruti-628001",
                "P.S. Thamaraikani 14, Cudalore Road Panruti-628001"
            ],
            correct: 2,
            explanation: "Option C is exactly the same as the original. Other options have spelling differences or number changes."
            },
            {
            question: "Addilabad 15th April. 1852",
            options: [
                "Addilabad 15th April. 1852",
                "Adilahbad 15th April, 1952",
                "Addlliabad 15th April, 1852",
                "Addilabad 15th Aprial, 1852"
            ],
            correct: 0,
            explanation: "Option A is exactly the same as the original. Other options have spelling differences or date changes."
            },
            {
            question: "Kala Shanmugham, C/o ASA. Lamba Line Junglighat. Port Blair 744103",
            options: [
                "Kala Shanmugham, C/o ASA. Lamba Line Junglighat. Port Blair 744103",
                "Kala Shanmughan, C/o ASA, Lamba Lane Junglighat. Port Blair 744103",
                "Kala Shanmugham C/o ASA, Lamba Line Junglighat, Port Blair 7 44103",
                "Kala Shanmugham C/o ASA. Lamba Line Junglighat, Port Blair 7 44130"
            ],
            correct: 0,
            explanation: "Option A is exactly the same as the original. Other options have spelling differences or spacing changes."
            },
            {
            question: "Thirumangalam, 12th Septemb, 1872",
            options: [
                "Thirumangalam, 21st Septemb, 1872",
                "Thirumangalam, 12th Septemb, 1872",
                "Thirumangalam, 12th Septemb. 1872",
                "ThirunamgaIam. 12th Septem, 1872"
            ],
            correct: 1,
            explanation: "Option B is exactly the same as the original. Other options have spelling differences or date changes."
            },
            {
            question: "Guwahati 14th January, 1908",
            options: [
                "Guwahati 14th January, 1908",
                "Guwahati 14th January, 1980",
                "Guwhati 14th January, 1908",
                "Guwhuti 14th January, 1908"
            ],
            correct: 0,
            explanation: "Option A is exactly the same as the original. Other options have spelling differences or date changes."
            },
            {
            question: "Mr. Ramachandran 1068/90. A.F.O. Bangalore (Karnataka)",
            options: [
                "Mr. Ramachandran 1068/90. A.F.O. Bangalore (Karnataka)",
                "Mr. Ramachandran 106/8/90 A.F.O. Bangalor (Karnataka)",
                "Mr. Ramachandran 1086/90, A.F.O. Bangalore (Karnataka)",
                "Mr. Ramachandran 1068/90. A.F.O. Bangalore (Karnataka)"
            ],
            correct: 0,
            explanation: "Option A is exactly the same as the original. Other options have number changes or spelling differences."
            },
            {
            question: "Tarasankar Rastogi A-22, Indrant Road Sundargarh 436065",
            options: [
                "Tarasankar Rastogi A-22, Indrant Road Sundargarh 436065",
                "Tarashankar Rastogi A-22, lndrant Road Sundargarh 436065",
                "Tarasankar Rastogi A-24, lndrant Road Sundaragarh 436065",
                "Tarasankar Rastogi A-22, Indrant Road Sundargarh 436065"
            ],
            correct: 0,
            explanation: "Option A is exactly the same as the original. Other options have spelling differences or number changes."
            },
            {
            question: "Periyarpattan 15th Octob. 1989",
            options: [
                "Periyarpattan 15th Octob. 1989",
                "Pariyarpattan 15th Octob. 1998",
                "Pertyarpattan 15th Oct. 1989",
                "Periyarapattan 15th Octob. 1989"
            ],
            correct: 0,
            explanation: "Option A is exactly the same as the original. Other options have spelling differences or date changes."
            },
            {
            question: "Kathmandu 1st November, 1995",
            options: [
                "Kathmandu 1st November, 1995",
                "Kathmandu 1st November, 1996",
                "Kathamandu 1st November, 1995",
                "Kathmandu 1st Nomember, 1995"
            ],
            correct: 0,
            explanation: "Option A is exactly the same as the original. Other options have spelling differences or date changes."
            },
            {
            question: "TRIVANDRUM, AUGUST, 31, 2008",
            options: [
                "TRIVANDRUM, 31 AUGUST, 2008",
                "Trivandrum. August 31, 2008",
                "TRIVANDRUM, AUGUST, 31, 2008",
                "TRNANDRUM, August, 31, 2008"
            ],
            correct: 2,
            explanation: "Option C is exactly the same as the original. Other options have case differences or spelling errors."
            },
            {
            question: "Dr. C.V.R. Ramaswamy 19, Babanasam Street Airport Road, Lawspet Puducherry-635124",
            options: [
                "Dr. C.V.R. Ramaswamy 19, Babanasam Street Airport Road, Lawspet Puducherry-635124",
                "Dr. C.R.V. Ramaswamy 19, Babanasam Street Airport Road. Lawspet Puducherry-635124",
                "Dr. C.V.R. Ramaswamy 19, Babanasam Street Airport Road, Lawspet Puducherry-635124",
                "Dr. C.V.R. Ramaswamy 19, Babanasam Street Airport Road. Lawspet Puducherry-835124"
            ],
            correct: 0,
            explanation: "Option A is exactly the same as the original. Other options have spelling differences or number changes."
            },
            {
            question: "FG EUROFRED LIMITED Centennial Park, Centennial Avenue. Elstree,Hertfordshire United Kingdom WD6-3SG",
            options: [
                "FG EUROFRED LIMITED Cenetennial Park. Elstee. Hertfordshre United KingdomWD6 - 3SG",
                "FG EUROFRED LIMITED Cenetennial Park, Centennial Avenue. Elstree,Hertforbshire United Kingdom WD6 - 3SG",
                "FG EUROFRED LIMITED Centennial Park, Centennial Avenue. Elstree,Hertfordshire United Kingdom WD6 - 3SG",
                "FC EUROFRED UMJTED Centenlnal Park. Centenlnal Avenue, Elstee,Hertfordshire United Kingdom WD6 - 3SG"
            ],
            correct: 2,
            explanation: "Option C is exactly the same as the original. Other options have spelling differences or spacing changes."
            }
            ]
            };
            }

    initializeEventListeners() {
        // Welcome screen events
        document.getElementById('start-exam').addEventListener('click', () => this.startExam());
        
        // Exam screen events
        document.getElementById('submit-exam').addEventListener('click', () => this.showConfirmationModal());
        document.getElementById('prev-btn').addEventListener('click', () => this.previousQuestion());
        document.getElementById('next-btn').addEventListener('click', () => this.nextQuestion());
        
        // Modal events
        document.getElementById('cancel-submit').addEventListener('click', () => this.hideConfirmationModal());
        document.getElementById('confirm-submit').addEventListener('click', () => this.submitExam());
        
        // Results screen events
        document.getElementById('new-exam').addEventListener('click', () => this.resetExam());
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => this.handleKeyboardNavigation(e));
    }

    startExam() {
        // Get exam configuration
        this.examConfig.questionCount = parseInt(document.getElementById('question-count').value);
        this.examConfig.timeLimit = parseInt(document.getElementById('time-limit').value);
        this.examConfig.topicFilter = document.getElementById('topic-filter').value;
        
        // Generate questions
        this.examState.questions = this.generateQuestions();
        this.examState.currentQuestion = 0;
        this.examState.answers = {};
        this.examState.startTime = new Date();
        
        // Show exam screen
        this.showScreen('exam');
        this.displayQuestion();
        this.startTimer();
        this.updateProgress();
    }

    generateQuestions() {
        let allQuestions = [];
        
        // Collect questions based on topic filter
        if (this.examConfig.topicFilter === 'all') {
            Object.keys(this.questionsDatabase).forEach(topic => {
                this.questionsDatabase[topic].forEach(q => {
                    allQuestions.push({ ...q, topic });
                });
            });
        } else {
            this.questionsDatabase[this.examConfig.topicFilter].forEach(q => {
                allQuestions.push({ ...q, topic: this.examConfig.topicFilter });
            });
        }
        
        // Shuffle and select required number
        return this.shuffleArray(allQuestions).slice(0, this.examConfig.questionCount);
    }

    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    displayQuestion() {
        const question = this.examState.questions[this.examState.currentQuestion];
        
        // Update question number and topic
        document.getElementById('current-question-number').textContent = this.examState.currentQuestion + 1;
        document.getElementById('current-question-topic').textContent = this.getTopicDisplayName(question.topic);
        
        // Display question text
        document.getElementById('question-text').textContent = question.question;
        
        // Display options
        const optionsContainer = document.getElementById('options-container');
        optionsContainer.innerHTML = '';
        
        question.options.forEach((option, index) => {
            const optionElement = document.createElement('div');
            optionElement.className = 'option';
            optionElement.dataset.index = index;
            
            const isSelected = this.examState.answers[this.examState.currentQuestion] === index;
            if (isSelected) optionElement.classList.add('selected');
            
            optionElement.innerHTML = `
                <span class="option-label">${String.fromCharCode(65 + index)}</span>
                <span>${option}</span>
            `;
            
            optionElement.addEventListener('click', () => this.selectOption(index));
            optionsContainer.appendChild(optionElement);
        });
        
        // Update navigation buttons
        this.updateNavigationButtons();
    }

    selectOption(optionIndex) {
        this.examState.answers[this.examState.currentQuestion] = optionIndex;
        
        // Update visual selection
        const options = document.querySelectorAll('.option');
        options.forEach((option, index) => {
            option.classList.toggle('selected', index === optionIndex);
        });
    }

    previousQuestion() {
        if (this.examState.currentQuestion > 0) {
            this.examState.currentQuestion--;
            this.displayQuestion();
            this.updateProgress();
        }
    }

    nextQuestion() {
        if (this.examState.currentQuestion < this.examState.questions.length - 1) {
            this.examState.currentQuestion++;
            this.displayQuestion();
            this.updateProgress();
        }
    }

    updateNavigationButtons() {
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        
        prevBtn.disabled = this.examState.currentQuestion === 0;
        nextBtn.disabled = this.examState.currentQuestion === this.examState.questions.length - 1;
        
        if (this.examState.currentQuestion === this.examState.questions.length - 1) {
            nextBtn.textContent = 'Finish';
            nextBtn.innerHTML = 'Finish <i class="fas fa-check"></i>';
        } else {
            nextBtn.textContent = 'Next';
            nextBtn.innerHTML = 'Next <i class="fas fa-chevron-right"></i>';
        }
    }

    updateProgress() {
        const progress = ((this.examState.currentQuestion + 1) / this.examState.questions.length) * 100;
        document.getElementById('progress-fill').style.width = `${progress}%`;
        document.getElementById('question-counter').textContent = 
            `Question ${this.examState.currentQuestion + 1} of ${this.examState.questions.length}`;
    }

    startTimer() {
        const timeLimit = this.examConfig.timeLimit * 60; // Convert to seconds
        let timeLeft = timeLimit;
        
        this.timer = setInterval(() => {
            timeLeft--;
            
            if (timeLeft <= 0) {
                this.submitExam();
                return;
            }
            
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            document.getElementById('timer').textContent = 
                `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }, 1000);
    }

    showConfirmationModal() {
        document.getElementById('confirmation-modal').classList.add('active');
    }

    hideConfirmationModal() {
        document.getElementById('confirmation-modal').classList.remove('active');
    }

    submitExam() {
        this.hideConfirmationModal();
        this.examState.endTime = new Date();
        
        if (this.timer) {
            clearInterval(this.timer);
        }
        
        this.calculateResults();
        this.showScreen('results');
    }

    calculateResults() {
        const questions = this.examState.questions;
        const answers = this.examState.answers;
        
        let correct = 0;
        let incorrect = 0;
        const topicScores = {};
        const wrongAnswers = [];
        
        questions.forEach((question, index) => {
            const userAnswer = answers[index];
            const isCorrect = userAnswer === question.correct;
            
            if (isCorrect) {
                correct++;
            } else {
                incorrect++;
                wrongAnswers.push({
                    question: question.question,
                    userAnswer: question.options[userAnswer] || 'Not answered',
                    correctAnswer: question.options[question.correct],
                    explanation: question.explanation,
                    topic: question.topic
                });
            }
            
            // Track topic scores
            if (!topicScores[question.topic]) {
                topicScores[question.topic] = { correct: 0, total: 0 };
            }
            topicScores[question.topic].total++;
            if (isCorrect) topicScores[question.topic].correct++;
        });
        
        const totalQuestions = questions.length;
        const scorePercentage = Math.round((correct / totalQuestions) * 100);
        const timeUsed = this.calculateTimeUsed();
        
        this.displayResults({
            correct,
            incorrect,
            totalQuestions,
            scorePercentage,
            timeUsed,
            topicScores,
            wrongAnswers
        });
    }

    calculateTimeUsed() {
        const startTime = this.examState.startTime;
        const endTime = this.examState.endTime;
        const timeDiff = endTime - startTime;
        
        const minutes = Math.floor(timeDiff / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
        
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    displayResults(results) {
        // Update score overview
        document.getElementById('score-percentage').textContent = `${results.scorePercentage}%`;
        document.getElementById('score-details').textContent = 
            `${results.correct} out of ${results.totalQuestions} correct`;
        
        // Update statistics
        document.getElementById('correct-count').textContent = results.correct;
        document.getElementById('incorrect-count').textContent = results.incorrect;
        document.getElementById('time-used').textContent = results.timeUsed;
        document.getElementById('accuracy').textContent = `${results.scorePercentage}%`;
        
        // Display topic analysis
        this.displayTopicAnalysis(results.topicScores);
        
        // Display wrong answers
        this.displayWrongAnswers(results.wrongAnswers);
    }

    displayTopicAnalysis(topicScores) {
        const topicChart = document.getElementById('topic-chart');
        topicChart.innerHTML = '';
        
        Object.keys(topicScores).forEach(topic => {
            const score = topicScores[topic];
            const percentage = Math.round((score.correct / score.total) * 100);
            
            const topicItem = document.createElement('div');
            topicItem.className = 'topic-item';
            topicItem.innerHTML = `
                <span class="topic-name">${this.getTopicDisplayName(topic)}</span>
                <span class="topic-score">${score.correct}/${score.total} (${percentage}%)</span>
            `;
            
            topicChart.appendChild(topicItem);
        });
    }

    displayWrongAnswers(wrongAnswers) {
        const container = document.getElementById('wrong-answers-container');
        container.innerHTML = '';
        
        if (wrongAnswers.length === 0) {
            container.innerHTML = '<p style="text-align: center; color: #28a745; font-weight: 600;">Perfect! No incorrect answers.</p>';
            return;
        }
        
        wrongAnswers.forEach((item, index) => {
            const wrongAnswerItem = document.createElement('div');
            wrongAnswerItem.className = 'wrong-answer-item';
            wrongAnswerItem.innerHTML = `
                <div class="wrong-answer-question">
                    <strong>Question ${index + 1}:</strong> ${item.question}
                </div>
                <div class="wrong-answer-options">
                    <div class="wrong-answer-option user-answer">
                        <strong>Your Answer:</strong> ${item.userAnswer}
                    </div>
                    <div class="wrong-answer-option correct-answer">
                        <strong>Correct Answer:</strong> ${item.correctAnswer}
                    </div>
                </div>
                <div class="wrong-answer-explanation">
                    <strong>Explanation:</strong> ${item.explanation}
                </div>
            `;
            
            container.appendChild(wrongAnswerItem);
        });
    }

    getTopicDisplayName(topic) {
        const displayNames = {
            'average': 'Average',
            'percentage': 'Percentage',
            'ratio': 'Ratio',
            'profit': 'Profit & Loss',
            'operations': 'Operations',
            'sequences': 'Sequences',
            'addresses': 'Similar Addresses'
        };
        return displayNames[topic] || topic;
    }

    handleKeyboardNavigation(e) {
        if (this.currentScreen !== 'exam') return;
        
        switch(e.key) {
            case 'ArrowLeft':
                e.preventDefault();
                this.previousQuestion();
                break;
            case 'ArrowRight':
                e.preventDefault();
                this.nextQuestion();
                break;
            case '1':
            case '2':
            case '3':
            case '4':
                e.preventDefault();
                const optionIndex = parseInt(e.key) - 1;
                if (optionIndex >= 0 && optionIndex < 4) {
                    this.selectOption(optionIndex);
                }
                break;
        }
    }

    showScreen(screenName) {
        this.currentScreen = screenName;
        
        // Hide all screens
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        
        // Show target screen
        document.getElementById(`${screenName}-screen`).classList.add('active');
    }

    resetExam() {
        this.examState = {
            currentQuestion: 0,
            answers: {},
            startTime: null,
            endTime: null,
            questions: []
        };
        
        if (this.timer) {
            clearInterval(this.timer);
        }
        
        this.showScreen('welcome');
    }
}

// Initialize the exam system when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new IQExamSystem();
}); 
