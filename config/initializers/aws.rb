# frozen_string_literal: true

OpenSSL::SSL::VERIFY_PEER = OpenSSL::SSL::VERIFY_NONE

S3_BUCKET = Aws::S3::Resource.new.bucket(ENV['S3_BUCKET_NAME'])
