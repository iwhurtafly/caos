#http://stackoverflow.com/questions/7275496/tableless-model-in-rails-3-1
class Contact
  include ActiveModel::Validations
  include ActiveModel::Conversion
  extend ActiveModel::Naming

  attr_accessor :name, :email, :tel, :datetime, :text
  validates :name, :email, :datetime, :text, presence: true

  def initialize(attributes = {})
    if attributes
      attributes.each do |name, value|
        send("#{name}=", value)
      end
    end
  end

  def persisted?
    false
  end
end
