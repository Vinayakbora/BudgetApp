import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyD6ToHD8TiHKBbx22Ec2tYqoRk8zdWwncY",
    authDomain: "budgetcalculator-78106.firebaseapp.com",
    projectId: "budgetcalculator-78106",
    storageBucket: "budgetcalculator-78106.appspot.com",
    messagingSenderId: "487410343220",
    appId: "1:487410343220:web:cfe49bcb1140a3c339d961",
    measurementId: "G-PVSL9V73V5"
};

const app = initializeApp(firebaseConfig);

function saveUserData(userId, month, income, expense, budget) {
    const db = getDatabase();
    const reference = ref(db, 'users/' + userId);

    set(reference, {
        selectedMonth: month,
        monthlyIncome: income,
        monthlyExpense: expense,
        monthlyBudget: budget
    })
}

function readMonthlyBudget(userId) {
    const db = getDatabase();
    const reference = ref(db, 'users/' + userId + '/monthlyBudget');

    get(reference)
        .then((snapshot) => {
            const monthlyBudget = snapshot.val();
            console.log('Monthly Budget:', monthlyBudget);
            // Do something with the monthly budget
        })
        .catch((error) => {
            console.error('Error retrieving monthly budget:', error);
        });
}

saveUserData("vinayakbora", "June 2023", "80,000", "70,000", "10,000");
readMonthlyBudget("vinayakbora");


// var budget = budgetController.getBudget();
// var totalBudget = budget.budget;
// var totalIncome = budget.totalInc;
// var totalExpense = budget.totalExp;

// var dateElement = document.querySelector(UIController.getDomStrings().dateLabel);
// var date = dateElement.textContent;

// console.log("Total Budget:", totalBudget);
// console.log("Total Income:", totalIncome);
// console.log("Total Expense:", totalExpense);
// console.log("Date:", date);

// saveUserData("vinayakbora", date, totalIncome, totalExpense, totalBudget);