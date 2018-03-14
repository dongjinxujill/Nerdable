@comments.each do |comment|
  json.comments do
    json.set! comment.id do
      json.partial! 'api/comments/comment', comment: comment
    end
  end
  json.author do
    json.extract! comment.author, :author_id, :username
  end
end
