module ApisHelper
  def render_500(exception)
    Rails.logger.error("[API] class=#{exception.class} message=#{exception.message}")

    render_error('Internal Server Error', 500)
  end
end
