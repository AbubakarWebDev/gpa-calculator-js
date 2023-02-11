/********** JavaScript Start from Here **********/

// Global Variable Initalization
let addField = document.getElementById('add');
let index = 1;
let regxForObt = /^[0-9]{1,3}$/;
let regxFortotal = /^[0-9]{2,3}$/;
let regxForCredits = /^[0-9]{1,2}$/;

addField.addEventListener('click', function () {
    // Function Local Variable Initalization
    let append =
        `<section>
            <div class="m-3">
                <span>New Subject # ${index} Marks : </span>
                <input class="form-control" type="text" placeholder="Enter Obtained Marks" required>
                <div class="invalid-feedback">Your Entered Input is not Valid. Please Check Input Requirements.</div>
            </div>
            <div class="m-3">
                <input class="form-control" type="text" placeholder="Enter Total Marks" required>
                <div class="invalid-feedback">Your Entered Input is not Valid. Please Check Input Requirements.</div>
            </div>
            <div class="m-3">
                <input class="form-control" type="text" placeholder="Enter Course Credit Hours" required>
                <div class="invalid-feedback">Your Entered Input is not Valid. Please Check Input Requirements.</div>
            </div>
            <div class="chkbox-container">
                <span style="margin-right:10px"></span>
                <input classs="form-control" id="box${index}" type="checkbox" />
                <label for="box${index}"></label>
            </div>
            <button class="btn btn-primary title" type="button">Change Your Title</button>
        </section>`;
    let btn_section = document.getElementById('btn-section');
    let delField = document.getElementById('del');

    // Appending New Subject
    btn_section.insertAdjacentHTML('beforebegin', append);

    // Show Delete Button
    delField.style.display = "inline-block";

    // Change title
    let addtitle = document.getElementsByClassName('title');
    for (const element of addtitle) {
        element.addEventListener('click', function () {
            let title;
            title = prompt("Please Enter Your Title");
            if (title == "" || title == null) {
                alert("Blank Values Are Not Allowed. Please Enter Again!");
            }
            else {
                element.parentElement.firstElementChild.firstElementChild.innerHTML = title;
            }
        });
    }

    // Appended Subjects Validation 
    let input_1 = document.querySelectorAll("input[placeholder = 'Enter Obtained Marks']");
    let input_2 = document.querySelectorAll("input[placeholder = 'Enter Total Marks']");
    let input_3 = document.querySelectorAll("input[placeholder = 'Enter Course Credit Hours']");

    input_1.forEach(element => {
        element.addEventListener('blur', function () {
            if (!regxForObt.test(element.value)) {
                element.classList.add('is-invalid');
            }
            else {
                element.classList.remove('is-invalid');
            }
        });
    })


    input_2.forEach((element, index) => {
        element.addEventListener('blur', function () {
            if ((!regxFortotal.test(element.value)) || (parseInt(input_1[index].value) > parseInt(element.value))) {
                element.classList.add('is-invalid');
            }
            else {
                element.classList.remove('is-invalid');
            }
        });
    })

    input_3.forEach(element => {
        element.addEventListener('blur', function () {
            if (!regxForCredits.test(element.value)) {
                element.classList.add('is-invalid');
            }
            else {
                element.classList.remove('is-invalid');
            }
        });
    })

    // Increment (index) for delete Button
    index++;

    // Click Delete Button to Delete New Subject
    delField.addEventListener('click', function () {
        let checkboxes = document.querySelectorAll("input[type=checkbox]");
        checkboxes.forEach(element => {
            if (element.checked) {
                element.parentElement.parentElement.remove();
                index--;
                if (index <= 1) {
                    delField.style.display = "none";
                }
            }
        })
    });
});

/************ Form Validation ************/

// Variable For Form Validation
let fname = document.getElementById('fname');
let lname = document.getElementById('lname');
let email = document.getElementById('email');
let input_1 = document.querySelectorAll("input[placeholder = 'Enter Obtained Marks']");
let input_2 = document.querySelectorAll("input[placeholder = 'Enter Total Marks']");
let input_3 = document.querySelectorAll("input[placeholder = 'Enter Course Credit Hours']");

// Ragular Experations for Form Validation
let regxForName = /^[a-zA-Z0-9]{2,20}$/;
let regxForEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

fname.addEventListener('blur', function () {
    if (!regxForName.test(fname.value)) {
        fname.classList.add('is-invalid');
    }
    else {
        fname.classList.remove('is-invalid');
    }
});

lname.addEventListener('blur', function () {
    if (!regxForName.test(lname.value)) {
        lname.classList.add('is-invalid');
    }
    else {
        lname.classList.remove('is-invalid');
    }
});

email.addEventListener('blur', function () {
    if (!regxForEmail.test(email.value)) {
        email.classList.add('is-invalid');
    }
    else {
        email.classList.remove('is-invalid');
    }
});


input_1.forEach(element => {
    element.addEventListener('blur', function () {
        if (!regxForObt.test(element.value)) {
            element.classList.add('is-invalid');
        }
        else {
            element.classList.remove('is-invalid');
        }
    });
})


input_2.forEach((element, index) => {
    element.addEventListener('blur', function () {
        if ((!regxFortotal.test(element.value)) || (parseInt(input_1[index].value) > parseInt(element.value))) {
            element.classList.add('is-invalid');
        }
        else {
            element.classList.remove('is-invalid');
        }
    });
})

input_3.forEach(element => {
    element.addEventListener('blur', function () {
        if (!regxForCredits.test(element.value)) {
            element.classList.add('is-invalid');
        }
        else {
            element.classList.remove('is-invalid');
        }
    });
})

let submit = document.getElementById('submit');
submit.addEventListener('click', (event) => {
    event.preventDefault();

    lastValidate();

    let inputAll = Object.values(document.querySelectorAll("input[placeholder]"));
    let massage = document.getElementById('massage');
    let type, slogan, description;
    let check = false;
    let arr = [];

    for (let i = 0; i < inputAll.length; i++) {
        const element = inputAll[i];
        if (!element.classList.contains("is-invalid") && element.value != "") {
            arr[i] = false;
        }
        else {
            arr[i] = true;
        }
    }

    check = arr.every(element => {
        return element == false;
    })

    if (check) {
        type = "warning";
        slogan = "Congrtulations!";
        description = "All Details has been Submitted Successfully."
        storeData();
        document.getElementById("form").reset();
    }
    else {
        type = "danger";
        slogan = "Error!";
        description = "One of the Input is Wrong So Details has Not been Submitted Successfully.";
    }

    massage.innerHTML =
        `<div id="alert-success" class="alert alert-${type} alert-dismissible fade show" role="alert">
            <strong>${slogan}</strong> ${description}.
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>`

    setTimeout(function () {
        if (massage.innerHTML.indexOf('alert-warning') !== -1) {
            massage.innerHTML = "";
        }
    }, 5000)
});


function lastValidate() {
    let input_1 = document.querySelectorAll("input[placeholder = 'Enter Obtained Marks']");
    let input_2 = document.querySelectorAll("input[placeholder = 'Enter Total Marks']");
    let input_3 = document.querySelectorAll("input[placeholder = 'Enter Course Credit Hours']");

    if (!regxForName.test(fname.value)) {
        fname.classList.add('is-invalid');
    }
    else {
        fname.classList.remove('is-invalid');
    }

    if (!regxForName.test(lname.value)) {
        lname.classList.add('is-invalid');
    }
    else {
        lname.classList.remove('is-invalid');
    }

    if (!regxForEmail.test(email.value)) {
        email.classList.add('is-invalid');
    }
    else {
        email.classList.remove('is-invalid');
    }

    input_1.forEach(element => {
        if (!regxForObt.test(element.value)) {
            element.classList.add('is-invalid');
        }
        else {
            element.classList.remove('is-invalid');
        }
    })

    input_2.forEach((element, index) => {
        if ((!regxFortotal.test(element.value)) || (parseInt(input_1[index].value) > parseInt(element.value))) {
            element.classList.add('is-invalid');
        }
        else {
            element.classList.remove('is-invalid');
        }
    })

    input_3.forEach(element => {
        if (!regxForCredits.test(element.value)) {
            element.classList.add('is-invalid');
        }
        else {
            element.classList.remove('is-invalid');
        }
    })
}


function storeData() {
    let fname = document.getElementById('fname');
    let lname = document.getElementById('lname');
    let email = document.getElementById('email');
    let input_1 = document.querySelectorAll("input[placeholder = 'Enter Obtained Marks']");
    let input_2 = document.querySelectorAll("input[placeholder = 'Enter Total Marks']");
    let input_3 = document.querySelectorAll("input[placeholder = 'Enter Course Credit Hours']");
    let data = [];

    function subjectData(name, obtained, total, credit) {
        return {
            subjectName: name,
            obtainedMarks: parseInt(obtained),
            totalMarks: parseInt(total),
            creditHours: parseInt(credit),
            calculatePercentage: function () {
                let per = (this.obtainedMarks / this.totalMarks) * 100
                return per;
            },
            calculateGradeAndGPA: function () {
                let percentage = this.calculatePercentage();
                let grade, gpa;

                if (percentage >= 85 && percentage <= 100) {
                    grade = "A";
                    gpa = 4;
                }
                else if (percentage >= 80 && percentage <= 84) {
                    grade = "A-";
                    gpa = 3.5;
                }
                else if (percentage >= 75 && percentage <= 79) {
                    grade = "B";
                    gpa = 3;
                }
                else if (percentage >= 70 && percentage <= 74) {
                    grade = "B-";
                    gpa = 2.5;
                }
                else if (percentage >= 65 && percentage <= 69) {
                    grade = "C";
                    gpa = 2;
                }
                else if (percentage >= 60 && percentage <= 64) {
                    grade = "C-";
                    gpa = 1.5;
                }
                else if (percentage >= 55 && percentage <= 59) {
                    grade = "D";
                    gpa = 1.0;
                }
                else if (percentage >= 50 && percentage <= 54) {
                    grade = "D-";
                    gpa = 0.5;
                }
                else if (percentage >= 0 && percentage <= 49) {
                    grade = "F";
                    gpa = 0;
                }

                let gradeGPA = [grade, gpa];

                return gradeGPA;
            }
        }
    }

    let profileData = {
        firstName: fname.value,
        lastName: lname.value,
        Email: email.value
    }

    data[0] = profileData;

    for (let i = 0; i < input_1.length; i++) {
        let name = input_1[i].parentElement.parentElement.firstElementChild.firstElementChild.innerText;
        let subName = name.replace(":", "");
        data[i + 1] = subjectData(subName, input_1[i].value, input_2[i].value, input_3[i].value);
    }

    let obtainedSum = 0;
    let totalSum = 0;
    let creditSum = 0

    for (let i = 0; i < data.length - 1; i++) {
        let gradeGpa = [];
        let gradepoint = [];

        obtainedSum = obtainedSum + data[i + 1].obtainedMarks;
        totalSum = totalSum + data[i + 1].totalMarks;
        creditSum = creditSum + data[i + 1].creditHours;


        gradeGpa[i] = data[i + 1].calculateGradeAndGPA();
        gradepoint[i] = gradeGpa[i][1] * data[i + 1].creditHours;
    }

    let totalPercentage = (obtainedSum / totalSum) * 100;
    let totalGrade;
    let totalGpa

    if (totalPercentage >= 85 && totalPercentage <= 100) {
        totalGrade = "A";
        totalGpa = 4.0;
    }
    else if (totalPercentage >= 80 && totalPercentage <= 84) {
        totalGrade = "A-";
        totalGpa = 3.5;
    }
    else if (totalPercentage >= 75 && totalPercentage <= 79) {
        totalGrade = "B";
        totalGpa = 3.0;
    }
    else if (totalPercentage >= 70 && totalPercentage <= 74) {
        totalGrade = "B-";
        totalGpa = 2.5;
    }
    else if (totalPercentage >= 65 && totalPercentage <= 69) {
        totalGrade = "C";
        totalGpa = 2.0;
    }
    else if (totalPercentage >= 60 && totalPercentage <= 64) {
        totalGrade = "C-";
        totalGpa = 1.5;
    }
    else if (totalPercentage >= 55 && totalPercentage <= 59) {
        totalGrade = "D";
        totalGpa = 1.0;
    }
    else if (totalPercentage >= 50 && totalPercentage <= 54) {
        totalGrade = "D-";
        totalGpa = 0.5;
    }
    else if (totalPercentage >= 0 && totalPercentage <= 49) {
        totalGrade = "F";
        totalGpa = 0.0;
    }

    let result = {
        totalMarks: totalSum,
        obtainedMarks: obtainedSum,
        creditHours: creditSum,
        percentage: totalPercentage,
        grade: totalGrade,
        gpa: totalGpa
    }

    data.push(result);

    let table = document.getElementById('table');
    let userName = document.getElementById('name');
    let userEmail = document.getElementById('Email');
    let tbody = document.getElementById('table-body');
    table.style.display = "block";
    userEmail.innerText = `Email : ${data[0].Email}`;
    userName.innerText = `Name : ${data[0].firstName} ${data[0].lastName}`;

    let html =
        `<tfoot>
            <tr style="background-color: #343a40; color: white;">
                <th style="border:none !important">#</th>
                <th style="border:none !important">Total Result</th>
                <th style="border:none !important">${data[data.length - 1].totalMarks}</th>
                <th style="border:none !important">${data[data.length - 1].obtainedMarks}</th>
                <th style="border:none !important">${data[data.length - 1].creditHours}</th>
                <th style="border:none !important">${data[data.length - 1].percentage} % </th>
                <th style="border:none !important">${data[data.length - 1].grade}</th>
                <th style="border:none !important">${data[data.length - 1].gpa}</th>
            </tr>
        </tfoot>`;

    for (let i = 1; i < data.length - 1; i++) {
        tbody.innerHTML +=
            `<tr>
                <th scope="row">${i}</th>
                <td>${data[i].subjectName}</td>
                <td>${data[i].totalMarks}</td>
                <td>${data[i].obtainedMarks}</td>
                <td>${data[i].creditHours}</td>
                <td>${data[i].calculatePercentage()} % </td>
                <td>${(data[i].calculateGradeAndGPA())[0]}</td>
                <td>${(data[i].calculateGradeAndGPA())[1]}</td>
            </tr>`;
    }

    tbody.insertAdjacentHTML('beforeend', html);

    // let url = "js/postData.json";
    // let request = {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify(data)
    // }
    // fetch(url, request)
    //     .then(response => { response.json() })
    //     .then(responseData => { console.log(responseData); })
    //     .catch(() => { console.log("Some Error Occured While Fetching Data From Server"); });
}