class WebNotificationsChannel < ApplicationCable::Channel
  def subscribed
    stream_from "web_notifications_channel"
  end

  # Fire up another rails c and paste in the below
  #
  # renderer = PostsController.renderer.new(
  #   "action_dispatch.request.parameters"=>{bzq: 'posts.all.items.0'},
  #   "action_dispatch.request.formats"=>[Mime[:js]]
  # )
  # msg = renderer.render(:index)
  #
  # ActionCable.server.broadcast('web_notifications_channel', message: msg)

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
