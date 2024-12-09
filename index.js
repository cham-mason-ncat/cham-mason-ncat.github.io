const surveyJson = {
  pages: [{
    name: "PersonalDetails",
    elements: [{
      type: "text",
      name: "FirstName",
      title: "Enter your first name:"
    }, {
      type: "text",
      name: "LastName",
      title: "Enter your last name:"
    }, {
      type: "panel",
      name: "Feedback",
      state: "collapsed",
      title: "feedback",
      elements: [{
        type: "text",
        name: "SiteDescription",
        title: "Was the website helpful:"
      }, {
        type: "text",
        name: "improvements",
        title: "What improvements could be made?:"
      }]
    }]
  }]
};


const survey = new Survey.Model(surveyJson);

function alertResults (sender) {
    const results = JSON.stringify(sender.data);
    alert(results);
}

survey.onComplete.add(alertResults);

document.addEventListener("DOMContentLoaded", function() {
    survey.render(document.getElementById("surveyContainer"));
});
//specific java code for survey.js plugin, contains contents of survey and handling to render survey