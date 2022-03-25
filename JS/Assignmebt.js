let url = "https://run.mocky.io/v3/010e898c-a05c-4a0a-b947-2a65b5a267c5";
var data_x;
let new_data = [];
let d = new Date();
let table = document.getElementById("employe_table");
let div = document.getElementById("div");
let details = document.getElementById("individual_info");
let time = d.getHours();

// greetings function
function greetings(c) {
    if (time >= 6 & time <= 12) {
        return "Good Morning " + c
    } else if (time >= 12.1 & time <= 18) {
        return "Good afternoon " + c
    } else {
        return "Good Evening " + c
    }

}
// Navigation function
function naviateto() {
    window.scrollTo(0, 700);
}
// display right side data function
function display_employe_data(b, j) {
    if (window.innerWidth < 1530) {
        naviateto()
    }
    let id = b[j]['id'];
    let uid = b[j]['uid']
    let dob = b[j]['date_of_birth']
    let employment_title = b[j]['employment']['title'];
    let employment_key_skill = b[j]['employment']['key_skill'];
    let email = b[j]['email'];
    let city = b[j]['address']['city'];
    let state = b[j]['address']['state'];
    let country = b[j]['address']['country'];
    let street_address = b[j]['address']['street_address'];
    let street_name = b[j]['address']['street_name'];
    let credit_card = b[j]['credit_card']['cc_number'];
    let zip_code = b[j]['address']['zip_code'];
    let phone_no = b[j]['phone_number'];
    let payment_method = b[j]['subscription']['payment_method'];
    let plan = b[j]['subscription']['plan'];
    let status = b[j]['subscription']['status'];
    let term = b[j]['subscription']['term'];
    let first_name = b[j]['first_name'];
    let last_name = b[j]['last_name'];
    let gender = b[j]['gender'];
    let greet = greetings(first_name);
    let avatar = b[j]['avatar'];
    let detail_text = `
    <p>
    <img class ="avatar" src="${avatar}"><br>
    <b><h2>${greet}</h2></b><br>
    <b>Name</b>: ${first_name} ${last_name}<br>  <b>Gender</b>: ${gender}<br>
    <b>Date of Birth</b>: ${dob}<br>
    <b>Email</b>: ${email}<br> <b>Phnoe Number</b>: ${phone_no}<br>
    <b>ID</b>: ${id}<br>  <b>UID</b>: ${uid}<br>
    <b>Employement</b>:<br>
    <ul>
    <li><b>Title</b>: ${employment_title}</li>
    <li><b>Key Skill</b>: ${employment_key_skill}</li>
    </ul><br>
    <b>Address</b>: ${street_name}, ${street_address}, ${city}, ${state}, ${country}, ${zip_code}<br>
    <b>Credit card number</b>: ${credit_card}<br>
    <b>Subscription</b>:<br>
    <ul>
    <li><b>Plan</b>: ${plan}</li>
    <li><b>Status</b>: ${status}</li>
    <li><b>Payment Method</b>: ${payment_method}</li>
    <li><b>Term</b>: ${term}</li>
    </ul><br>
    </p>
    `
    details.innerHTML = detail_text
}

// onClick function for right side data
function demo_data(j) {
    display_employe_data(this.data_x, j)
}

// onclick function display new data right side
function demo_new_data(k) {
    display_employe_data(new_data, k)
}

// display function after deleting data
function display_employe_new_list(c) {

    let text = `<tr>
    <th class="sr_no">Sr. No.</th>
    <th>First Name</th>
    <th>Last Name</th>
    <th>Username</th>
    <th>Employment Title</th>
    <th>Country</th>
    <th>Action</th>
    </tr>`;
    let len = c.length;
    for (let k = 0; k < len; k++) {
        let first_name = c[k]['first_name'];
        let last_name = c[k]['last_name'];
        let username = c[k]['username'];
        let employment = c[k]['employment']['title'];
        let country = c[k]['address']['country'];
        text += `
        <tr>
        <td class="sr_no">${k + 1}</td>
        <td class="table_rows">${first_name}</td>
        <td class="table_rows">${last_name}</td>
        <td class="table_rows">${username}</td>
        <td class="table_rows">${employment}</td>
        <td class="table_rows">${country}</td>
        <td class = "table_rows_action">
        <button class = "icon" type="button" onClick="demo_new_data(${k})"><i class="fa-solid fa-user-secret fa-2x"></i></button>
        <button class = "icon" type="button" onClick="delete_data('${first_name}')"><i class="fa-solid fa-user-xmark fa-2x"></i></button>
        <button class = "icon" type="button"><i class="fa-solid fa-user-pen fa-2x"></i></button>
        </td>
        </tr>`;

    }
    table.innerHTML = text;
    display_employe_data(c, 0)
}
// OnClick function to delete data
function delete_data(j) {
    len = this.data_x.length
    for (let i = 0; i < len; i++) {
        if (this.data_x[i] != undefined) {
            console.log(i)
            if (this.data_x[i]['first_name'] == j) {
                console.log(j)
                delete this.data_x[i]
            }
        }
    }
    new_data.length = 0;
    for (let x of this.data_x) {
        if (x != undefined) {
            new_data.push(x)
        }
    }
    display_employe_new_list(new_data)

}

// display left side data finction
function display_employe_list(a) {
    let text = `<tr>
    <th class="sr_no">Sr. No.</th>
    <th>First Name</th>
    <th>Last Name</th>
    <th>Username</th>
    <th>Employment Title</th>
    <th>Country</th>
    <th>Action</th>
    </tr>`;
    let len = a.length;
    for (let i = 0; i < len; i++) {
        let first_name = a[i]['first_name'];
        let last_name = a[i]['last_name'];
        let username = a[i]['username'];
        let employment = a[i]['employment']['title'];
        let country = a[i]['address']['country'];
        text += `
        <tr>
        <td class="sr_no">${i + 1}</td>
        <td class="table_rows">${first_name}</td>
        <td class="table_rows">${last_name}</td>
        <td class="table_rows">${username}</td>
        <td class="table_rows">${employment}</td>
        <td class="table_rows">${country}</td>
        <td class = "table_rows_action">
        <button class = "icon" type="button" onClick="demo_data(${i})"><i class="fa-solid fa-user-secret fa-2x"></i></button>
        <button class = "icon" type="button" onClick="delete_data('${first_name}')"><i class="fa-solid fa-user-xmark fa-2x"></i></button>
        <button class = "icon" type="button"><i class="fa-solid fa-user-pen fa-2x"></i></button>
        </td>
        </tr>`;
        // table.insertAdjacentHTML('beforeend', `${text}`);
    }
    table.insertAdjacentHTML('beforeend', `${text}`);
    display_employe_data(a, 0)
}


fetch(url).then(function(resp) {
    return resp.json()

}).then(function(data) {
    this.data_x = data
    display_employe_list(data_x)
})