function searchCourses() {
    var searchInput = document.getElementById('search-input').value.toLowerCase();
    var courseItems = document.getElementsByClassName('course-item');

    for (var i = 0; i < courseItems.length; i++) {
        var courseTitle = courseItems[i].getElementsByClassName('course-title')[0].innerText.toLowerCase();
        if (courseTitle.includes(searchInput)) {
            courseItems[i].style.display = 'block';
        } else {
            courseItems[i].style.display = 'none';
        }
    }
}
document.getElementById('search-input').addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
        searchCourses();
    }
});
function showCourseDetails(courseId) {
    var courseDetails = getCourseDetails(courseId); // Hàm này trả về thông tin chi tiết của khóa học dựa trên ID
  
    var courseDetailsElement = document.getElementById('course-details');
    courseDetailsElement.innerHTML = ''; // Xóa nội dung hiện tại trong phần tử chi tiết khóa học
  
    // Tạo các phần tử HTML để hiển thị thông tin chi tiết
    var courseTitleElement = document.createElement('h2');
    courseTitleElement.textContent = courseDetails.title;
  
    var courseDescriptionElement = document.createElement('p');
    courseDescriptionElement.textContent = courseDetails.description;
  
    // Thêm các phần tử vào phần tử chi tiết khóa học
    courseDetailsElement.appendChild(courseTitleElement);
    courseDetailsElement.appendChild(courseDescriptionElement);
    courseDetailsElement.appendChild(courseAuthorElement);
  }
  
  // Hàm này lấy thông tin chi tiết của khóa học dựa trên ID (cần được cung cấp hoặc lấy từ nguồn dữ liệu)
  function getCourseDetails(courseId) {
    var courses = [
        {
          title: 'Spring Boot - Web Back End',
          type: 'Trực tuyến'
        },
        {
          title: 'Spring Boot - Web Back End',
          type: 'Phòng lab'
        },
        {
          title: 'Spring Boot - Web Back End',
          type: 'Phòng lab'
        },
        {
          title: 'Spring Boot - Web Back End',
          type: 'Trực tuyến'
        },
        {
          title: 'Spring Boot - Web Back End',
          type: 'Trực tuyến'
        }
      ];
      
      function createCourseElement(course) {
        var courseItem = document.createElement('div');
        courseItem.classList.add('course-item');
      
        var titleElement = document.createElement('h2');
        titleElement.classList.add('fs-5', 'mb-3', 'text-dark');
        titleElement.textContent = course.title;
      
        var typeElement = document.createElement('p');
        typeElement.classList.add('type', 'fw-light', 'text-black-50');
        typeElement.textContent = course.type;
      
        courseItem.appendChild(titleElement);
        courseItem.appendChild(typeElement);
      
        return courseItem;
      }
      
      function renderCourses() {
        var courseListElement = document.getElementById('course-list');
      
        for (var i = 0; i < courses.length; i++) {
          var course = courses[i];
          var courseElement = createCourseElement(course);
          courseListElement.appendChild(courseElement);
        }
      }
      
      renderCourses();
    }