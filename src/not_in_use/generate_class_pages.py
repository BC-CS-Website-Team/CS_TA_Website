import os

# List of classes with their full titles
classes = [
    ('CSC102', 'Intro Digital Humanities (ENG)'),
    ('CSC110', 'Craft of Computing'),
    ('CSC111', 'Storytelling-Computation'),
    ('CSC114', 'Business App & Prog (BUS)'),
    ('CSC121', 'Introduction to Game Design'),
    ('CSC124', 'Building Better Apps'),
    ('CSC126', 'Intro to Robotics'),
    ('CSC127', 'Intro to Web Design'),
    ('CSC150', 'Management Info. Systems (BUS)'),
    ('CSC226', 'Software Design & Implement'),
    ('dropdown_menus', 'Data Structures'),
    ('CSC246', 'Scalable Algorithms & Objects'),
    ('CSC300', 'Embedded Systems'),
    ('CSC301', 'Human-Computer Computing'),
    ('CSC303', 'Theory of Computation'),
    ('CSC338', 'Data Analytics (BUS)'),
    ('CSC340', 'Database Systems'),
    ('CSC335', 'Computer Organization'),
    ('CSC336', 'E-Commerce (BUS)'),
    ('CSC410', 'Computational Intelligence'),
    ('CSC412', 'Networking'),
    ('CSC420', 'Programming Languages'),
    ('CSC426', 'Operating Systems & VMs'),
    ('CSC435', 'Open Source Software Engring'),
    ('CSC439', 'Numerical Analysis (MAT)'),
    ('CSC440', 'Design & Analysis of Algorithm'),
    ('CSC445', 'Complexity & Modeling'),
    ('CSC450', 'Computer Security'),
    ('CSC493', 'Computing Design Practicum'),
    ('CSC495', 'Internship')
]

# HTML template
html_template = '''<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CS TA Program - {course_code}: {course_title}</title>
    <link rel="stylesheet" href="../../css/main.css">
    <link rel="stylesheet" href="../../css/responsive.css">
    <link rel="stylesheet" href="../../css/sidebar_and_containers.css">
</head>
<body>
    <header id="main-header"></header>
    <nav id="main-nav"></nav>
    <main>
        <div class="container">
            <div class="main-container">
                <div id="sidebar-container"></div>
                <div class="main-content">
                    <h1>{course_code}: {course_title}</h1>
                    <h2>Course Description</h2>
                    <p>[Course description to be added]</p>

                    <h2>Resources</h2>
                    <ul>
                        <li>Course Syllabus</li>
                        <li>Study Guides</li>
                        <li>Additional Materials</li>
                        <li>Linked Github and Slack</li>

                    </ul>
                </div>
            </div>
        </div>
    </main>
    <footer id="main-footer"></footer>
    <script src="../../js/main.js"></script>
    <script src="../../js/navigation.js"></script>
    <script src="classes.js"></script>
</body>
</html>'''


def create_html_files():
    # Get the current directory
    script_dir = os.path.dirname(os.path.abspath(__file__))

    # Create the classes directory if it doesn't exist
    classes_dir = os.path.join(script_dir, 'classes')
    os.makedirs(classes_dir, exist_ok=True)

    # Create HTML files for each class
    for course_code, course_title in classes:
        filename = f"{course_code}.html"
        file_path = os.path.join(classes_dir, filename)

        # Generate HTML content
        html_content = html_template.format(
            course_code=course_code,
            course_title=course_title
        )

        # Write the file
        with open(file_path, 'w') as f:
            f.write(html_content)

        print(f"Created {filename}")


if __name__ == "__main__":
    create_html_files()
    print("All HTML files have been created successfully!")