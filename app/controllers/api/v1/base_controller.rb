module Api
  module V1
    class BaseController < ActionController::Base
      include ApisHelper

      respond_to :json
      rescue_from Exception, with: :render_500
    end
  end
end
