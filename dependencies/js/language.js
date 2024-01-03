const localStorageKey = 'portfolioLanguage';
const translations = {
    "en": {
        "title_resume_page": "Digital Resume | Rafael",
        "brief_data": "Senior Developer, Full Stack Developer, PHP Developer, Know more about me",
        "linkedin_link": "See LinkedIn",
        "about_me_title": "About Me",
        "about_me_text": "I\'m a Full Stack PHP developer and passionate about technology. I have ease in learning, communicating, working in a team, providing customer support, programming and developing software and systems, analyzing and solving problems and I am curious about acquiring new knowledge.",
        "about_me_name": "Name: ",
        "about_me_age": "Age: ",
        "about_me_level": "Level: ",
        "about_me_experience": "Experience: ",
        "about_me_phone": "Phone: ",
        "about_me_mail": "E-mail: ",
        "about_me_level_value": "Full Stack Developer | Senior",
        "about_me_experience_value": "Years",
        "see_linkedin_perfil": "View Profile",
        "freelancer_status": "Available",
        "years_of": "Years of",
        "experience": "Experience",
        "projects_released": "Accomplished",
        "released_projects": "Projects",
        "working_at": "Working At",
        "skills_title": "Skills",
        "skill_database": "Database",
        "skill_office_package": "Office Package",
        "experiences_title": "Experiencies",
        "brasil_name": "Brazil",
        "job_title_company": "Company: ",
        "current_working_badge": "Current Working",
        "current_working_title": "Full Stack Developer - PHP",
        "current_working_small_badge": "At the moment",
        "current_working_description": "Development and analysis of web systems using back-end and frontend technologies and frameworks, as well as the use of databases creation of APIs and Webservices, planning, project structuring and software development; in addition to holding meetings for understanding with the client and meetings for solving problems, help and assistance to other developers, unit tests at the time of development, analysis o information in the database. In addition to common development projects, projects were also created that used maps, geolocation, cartographies an data analysis to assemble dashboards and graphs.",
        "old_job_title_1": "Business Analyst",
        "old_job_description_1": "Analyze and develop improvements according to the needs of users, in addition to performing queries to database, analyzing source codes creating logic and rules for developing SAP programs and reports, participating in projects, international meetings, integrated tests, contact with consultancies, understanding of the processes carried out by the areas and users, and other activities to the development area and analysis.",
        "old_job_title_2": "IT Support",
        "old_job_brief_2": "Brazilian Electoral Justice",
        "old_job_description_2": "Internship for IT Support, in which I provided support to users and carried out computer repairs, installation of equipment and software for the TRE (Regional Electoral Court). It also configured photography machines, printing and fingerprint capture devices and printers.",
        "old_job_title_3": "Metallurgical Apprentice",
        "old_job_description_3": "Metrologist and metallurgical laboratory worker, in addition to updating control spreadsheets, measuring parts, among other activities related to the functions assigned to me. ",
        "freelancer_job_title_1": "Full Stack Developer",
        "freelancer_job_description_1_part_1": "I developed the entire e-commerce and internal control system for ",
        "freelancer_job_description_1_part_2": "which I still support the company today. It was necessary to analyze and gather requirements with the company so that it was possible to understand the need and develop the project. In addition to the development, I did all the deployment and publication on the internet, from server configuration and hosting to the final deploy, as well as using APIs to calculate and validate zip codes, receive payments like “PIX” (Payment Method from Brazil), Bank Slip and Credit Card, send of emails, mails to customers, Google Analytics for traffic data analysis, SEO and Sitemap, database creation, administrative panel together with dashboards, responsiveness and other internal control features. Other than that, I also did all the graphic arts, banners, product template, email template, design, page layout and more.",
        "freelancer_job_title_2": "Wordpress Developer",
        "freelancer_job_description_2_part_1": "A solution was created for the company",
        "freelancer_job_description_2_part_2": "to publish blog posts and have a space on the same website to sell your products. I also did all the necessary configuration in Wordpress for correct operation by installing plugins and modules so that the company could insert and work without the need for technical knowledge of codes.",
        "freelancer_job_title_3": "Wordpress Developer",
        "freelancer_job_description_3_part_1": "Built the entire website to promote the company",
        "freelancer_job_description_3_part_2": "through Wordpress so they could showcase their products and reach more customers through the internet. I also inserted plugins and modules so that the company could insert and work without the need for technical knowledge in codes as well as updating the server's PHP version on the client.",
        "freelancer_job_title_4": "Website Developer",
        "freelancer_job_brief_4": "Other Customers",
        "freelancer_job_description_4_part_1": "I made some websites for small and micro businesses that had the objective of just listing and displaying your business on the internet to publish on social media, they are:",
        "freelancer_job_description_4_part_2": "and others...",
        "language_title": "Languages",
        "language_header_lang": "Language",
        "language_header_communicate": "Speaking",
        "language_header_reading": "Reading",
        "language_header_writing": "Writing",
        "language_data_lang_1": "Brazilian Portuguese",
        "language_data_communicate_1": "Native",
        "language_data_reading_1": "Native",
        "language_data_writing_1": "Native",
        "language_data_lang_2": "English",
        "language_data_communicate_2": "Intermediary",
        "language_data_reading_2": "Advanced",
        "language_data_writing_2": "Intermediary",
        "msg_drag_table_1": "Drag the table to the ",
        "msg_drag_table_2": "left",
        "knowledge_title": "Knowledge",
        "knowledge_sub_title_1": "Languages",
        "knowledge_sub_title_2": "Databases",
        "knowledge_sub_title_3": "Frameworks and APIs",
        "knowledge_sub_title_4": "Extra",
        "knowledge_desc_2_part_1": "Payment and tracking APIs by zip code and many others...",
        "knowledge_desc_4_part_1": "applications that uses PWA and I have my own website",
        "knowledge_desc_4_part_2": "for freelance services",
        "knowledge_desc_4_part_3": "See Website",
        "achievements_title": "Education and Certificates",
        "achievements_brief": "I graduated from the University of the Region of Joinville UNIVILLE (Santa Catarina / Brazil) with a Bachelor's degree in Information Systems",
        "education_table_title": "Education",
        "education_table_header_type": "Level",
        "education_table_header_degree": "Degree",
        "education_table_header_status": "Status",
        "table_status_complete": "Complete",
        "education_table_data_1": "Basic Education",
        "education_table_data_2": "High School",
        "education_table_data_4": "University Education",
        "education_table_data_5": "Bachelor in Information Systems",
        "certificates_table_title": "Certificates",
        "certificates_table_header_course": "Course",
        "certificates_table_header_institution": "Institution",
        "certificates_table_header_status": "Status",
        "certificates_table_data_1": "AI Skills Challenge - Microsoft",
        "certificates_table_data_2": "Microsoft 70-480 Certificate",
        "certificates_table_data_3": "WEB Development",
        "certificates_table_data_4": "Certificate of introduction to JAVA",
        "certificates_table_data_5": "English at OK Idiomas",
        "certificates_table_data_6": "Code of Ethics Certificate",
        "certificates_table_data_7": "Workplace safety",
        "certificates_table_data_8": "Quality in Metallurgy",
        "projects_title": "My Projects",
        "projects_brief_1": "Below I present some of the projects I developed as freelancers or personal projects.",
        "projects_brief_2": "Projects from companies where I work/worked",
        "projects_brief_3": "(mainly systems)",
        "projects_brief_4": "will not be displayed for reasons of integrity and confidentiality",
        "projects_button_1": "All",
        "projects_button_2": "Systems",
        "projects_button_3": "Websites",
        "projects_button_4": "E-commerces",
        "projects_button_5": "Others",
        "contact_me_title": "Contact Me",
        "contact_me_part_1": "You can contact me through my LinkedIn by clicking in the",
        "contact_me_part_2": "Contact me button below",
        "contact_button": "Contact Me",
        //"key": "value",
    },
    "pt": {
        //"chave": "valor",
    }
};

//Set language
function setLanguage(lang) {
    localStorage.setItem(localStorageKey, lang);
    translatePortfolio(lang);
}

//Translate all page content
function translatePortfolio(lang){
    if(lang != "pt"){
        let translations = document.querySelectorAll('[translate]');
        translations.forEach(translate => {
            translate.innerText = t(translate.getAttribute('translate'));
        });
    }
    releasePortfolio(lang);
}

//Force to change the language
function forceChangeLanguage(lang){
    document.querySelector('#btn-lang-'+lang).click();
    window.location.reload();
}

//Get translation by Key
function t(key) {
    return translations[localStorage.getItem(localStorageKey) || 'en'][key] || null;
}

//Check if page need show the language modal
if(!localStorage.getItem(localStorageKey) && document.querySelector("#langModal")){
    $('#langModal').modal({backdrop: 'static', keyboard: false});
} else {
    translatePortfolio(localStorage.getItem(localStorageKey));
}
