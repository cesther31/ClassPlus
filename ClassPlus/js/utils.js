$.get("navbar.html", function(data){
    $("#nav-placeholder").replaceWith(data);
});

$.get("searchbar.html", function(data){
    $("#search-placeholder").replaceWith(data);
});

$.get("course_top.html", function(data){
    $("#courseTop-placeholder").replaceWith(data);
});

$.get("searchbar.html", function(data){
    $("#searchbar-placeholder").replaceWith(data);
});

$.get("course_nav.html", function(data){
    $("#courseNav-placeholder").replaceWith(data);
});

$.get("profile_nav.html", function(data){
    $("#profileNav-placeholder").replaceWith(data);
});

$.get("study_group_nav.html", function(data){
    $("#studyGroupNav-placeholder").replaceWith(data);
});

$.get("mycourse_top.html", function(data){
    $("#mycourseTop-placeholder").replaceWith(data);
});

function navigateToCoursePage() {
    window.location.href = 'MyCourse.html';
}

function studySetsFunction() {
    window.location.href = 'course_page_study_sets.html';
}
function navigateToPosting() {
    window.location.href = 'course_page_posting.html';
}

function navigateToEnroll() {
  window.location.href = 'course_page_searchpage.html';
}

function navigateToDetail() {
    window.location.href = 'course_detail.html';
}

function navigateToSearch() {
    window.location.href = 'course_page_searchpage.html';
}