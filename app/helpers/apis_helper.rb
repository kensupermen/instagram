# frozen_string_literal: true

module ApisHelper
  def render_500(exception)
    Rails.logger.error("[API] class=#{exception.class} message=#{exception.message}")

    render_error('Internal Server Error', 500)
  end

  def render_error(message, status = 400)
    render json: { error: { message: message } }, status: status
  end
end
