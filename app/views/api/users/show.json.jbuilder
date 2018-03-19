json.partial! "api/users/user", user: @user
json.project_ids @user.project_ids
json.comment_ids @user.comment_ids
