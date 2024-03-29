function courseCheck(page, needsAi=0){
    // Get the query string from the URL
    const queryString = window.location.search;
    // Create a URLSearchParams object from the query string
    const urlParams = new URLSearchParams(queryString);
    subject = urlParams.get('sj');
    courseNumber = urlParams.get('cn');
    activityId = urlParams.get('ai');

    if(subject == "" || courseNumber== ""){
        alert("The wrong approach.");
        location.replace("mycourse.html");
    }

    var url = page + "?sj=" + subject + "&cn=" + courseNumber;
    if(activityId != null && needsAi == 1) url += "&ai=" + activityId;
    window.location.href = url;
}

function groupCheck(page, needsGi=0){
    // Get the query string from the URL
    const queryString = window.location.search;
    // Create a URLSearchParams object from the query string
    const urlParams = new URLSearchParams(queryString);
    groupId = urlParams.get('gi');

    if(groupId == ""){
        alert("The wrong approach.");
        location.replace("mygroup.html");
    }

    var url = page;

    // if(url == "group_meeting.html" && joined == 0){
    //     alert("You must join the group to set group meeting schedule.");
    //     return false;
    // }
    if(groupId != null && needsGi == 1) url += "?gi=" + groupId;
    window.location.href = url;
}

// This function changes sub-nav background color and text color depending on the page.
function setNavColor(){
    var vPillsTab = document.getElementById('v-pills-tab');
    var navItem = vPillsTab.getElementsByClassName('nav-item');
    var navLink = vPillsTab.getElementsByClassName('nav-link');

    for (var i = 0; i < navItem.length; i++) {
        navItem[i].style.backgroundColor = 'white';
        navItem[i].style.borderBottom = '1px #004F34 solid';
    }
    for (var i = 0; i < navLink.length; i++) {
        navLink[i].style.color = '#004F34';
    }

    const currentPagePath = window.location.pathname.substring(1);
    var profileLink = document.getElementById(currentPagePath);
    if(profileLink == null){
        if(currentPagePath.includes("post")){
            profileLink = document.getElementById('course_Post.html');
        }else if(currentPagePath.includes("study_set")){
            profileLink = document.getElementById('course_StudySet.html');
        }else if(currentPagePath.includes("group")){
            profileLink = document.getElementById('course_StudyGroup.html');
        }
    }

    if(profileLink != null){
        var aElement = profileLink.querySelector('a');
        profileLink.style.backgroundColor = '#004F34';
        aElement.style.color = 'white';
    }
}

function setPeopleTab() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    subject = urlParams.get('sj');
    courseNumber = urlParams.get('cn');
    
    const checkData = {
        subject: subject,
        courseNumber: courseNumber,
        userId : localStorage.getItem('userId')
    }
    axios.post(`/api/checkStatus`, checkData)
        .then(res => {
            if(res && res.data) {
                const peopleMenu = document.getElementById('course_People.html');
                if(peopleMenu != null){
                    if(res.data.status=="instructor" || res.data.status=="TA"){
                        peopleMenu.hidden=false;
                    }else{
                        peopleMenu.hidden=true;
                    }
                }
            }
        });
}

function onInit(){
    const currentPagePath = window.location.pathname.substring(1);
    if(currentPagePath.includes("course")){
        setPeopleTab();
    }
    setNavColor();
}

onInit();