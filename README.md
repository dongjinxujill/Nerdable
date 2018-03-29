# README

## TheRule

### [Live](https://therule.herokuapp.com/)

TheRule is a full-stack web application that shares Do-It-Yourself projects inspired by Instructables. It utilizes Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Redux architectural framework on the frontend.  

## Features & Implementation

### Login/Signup

Route utility creates several types of routes: auth route, protected route. Auth route means user isn't authorized to visit. Protected route means user is not logged in and doesn't have access to information that requires login. 

### Projects

If user is not logged in, clicking "write a project" will redirect user to login or sign up form.

Logged-in users are allowed to create their own projects by clicking "write a project" button at the navigation bar or at the dropdown menu on the top right. Creating and editing project is using the same React Component in order to write DRY code and extend the project's scalability. 

```
#project_form_container.jsx

const mapStateToProps = (state, ownProps) => {
  let formType, project, imageUrl, steps;
  if (ownProps.match.path === "/projects/new"){
    formType = "create";
    project = {title: "", body: "", imageFile: null, imageUrl:null};
  } else{
    formType = "update";
    project = state.entities.projects[ownProps.match.params.projectId] ||{title: "", body: "", imageFile: null, imageUrl:null};
    imageUrl = project.imageUrl;
    steps = state.entities.steps;
  }
  return {project, 
  formType, 
  currentUser: state.session.currentUser, 
  errors: state.errors.project, 
  imageUrl,  steps 
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

    fetchProject: id => dispatch(fetchProject(id)),
    createProject: project => dispatch(createProject(project)),
    updateProject: (project, projectId) => dispatch(updateProject(project, projectId)),
    clearProjectErrors: () => dispatch(clearProjectErrors())
  };
};
```

### Steps

Each project can have multiple steps. Each step represents the one instruction to create the subject this project is teaching for. Step Component has two separate logics to create and edit. When creating step, it's creating a fake step to have step_ids in current project's state. Everytime user edits the step, it's using step edit container to deal with this logic. 


### Comments

Logged-in users can make comments to any project. If no one is logged in at the moment, comment form will not shown. This logic is fulfilled by checking whether there is a current user in the state.

```
project_show.jsx

renderCommentForm(){
  if (this.props.currentUser){
    return <CommentForm project={project} key={project.id}/>;
  }
}
```

If a comment's author is currentUser, a delete button will be shown. Otherwise, it will not.

```
comments_index.jsx

renderDeleteButton(comment){
  if (!this.props.currentUser){
    return '';
  }
  if (this.props.currentUser.id === comment.author_id){
    return <button className="delete-comment-button" onClick={()=>this.props.deleteComment(comment.id)}>X</button>;
  }
}
```

### Searches

There is a search bar in the index page of TheRule, where you are able to search keywords and projects with matched titles will be shown.

The search parameter is handling in the backend through ActiveRecord and basic regex, which trims any whitespace, removes all punctuation except for any hyphens and checks if the input is matched with any project title.

```
projects_controller.rb

def search
  if params[:query]
    @projects = Project.where("lower(title) LIKE ?", "%#{params[:query]}%").all
  end
end
```

### Profiles

User profile is composed of profile image, username, user's account creating time, and user's projects. In user profile, each project has a delete button that user can delete this specific project if wanted. 

In each project show page, each user's image is clickable and is directly linked to user's profile page.

```
project_show.jsx

renderUsername(project){
  return <Link to={`/users/${project.author_id}`} >{this.props.authors[project.author_id].username}</Link>;
}
```

## Future for the Project

Below are some of the things I hope to continue working on and implementing in the near future .

### Follows

### Features

### Categories
