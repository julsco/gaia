
// Meet the team

const team = document.querySelector(".team");

const employees = [
    {
        fullName: "Mark Kulliman",
        description: "Designated Agency Safety and Health Official (DASHO)"
    },
    {
        fullName: "Cecil Whitehouse",
        description: "Bureau Safety Manager"
    },
    {
        fullName: "Melisa Griffin",
        description: "Bureau Environmental Protection Specialist"
    },
    {
        fullName: "Javan Alexander",
        description: "Regional Director"
    },
    {
        fullName: "Fabian Begum",
        description: "Regional Safety Professional"
    },
    {
        fullName: "Matylda Hinton",
        description: "Government Environmental Manager"
    },
]

const employeeMarkup = (employee) => {
    return `
    <div class="employee">
        <div class="employee__pic">
            <img src="img/${employee.fullName}.jpg" class="img">
        </div>
        <div class="employee__name">
            ${employee.fullName}
        </div>
        <div class="employee__description">
            ${employee.description}
        </div>
    </div>
    `
}

employees.forEach(employee => {
    console.log(employee.description, employee.fullName);
    const markup = employeeMarkup(employee)
    team.insertAdjacentHTML("beforeend", markup)
});

