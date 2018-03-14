# debugger
@comments.each do |comment|
  json.comments do
    json.set! comment.id do
      json.partial! 'api/comments/comment', comment: comment
      json.createAt comment.created_at.to_date
    end
  end
end

json.users do
  @comments.map(&:author).each do |author|
    json.set! author.id do
      json.extract! author, :id, :username

    end
  end
end
