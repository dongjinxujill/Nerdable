@comments.each do |comment|
  json.comments do
    json.set! comment.id do
      json.partial! 'api/comments/comment', comment: comment
    end
  end
  # json.users do
  #   json.id comment.user.id
  #   json.username comment.user.username
  # end
end

json.users do
  @comments.map(&:author).each do |author|
    json.set! author.id do
      json.extract! author, :id, :username, :image

    end
  end
end
