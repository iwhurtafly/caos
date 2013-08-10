# -*- coding: utf-8 -*-
class ContactNotifier < ActionMailer::Base
  default from: ENV['CAOS_MAIL_FR']

  def create(contact)
    @contact = contact
    #mail to: ENV['CAOS_MAIL_TO'], subject: "Webサイトからの問い合わせ [#{contact.name}]" ##we should use this line on production
    mail to: 'hayab2s@gmail.com', subject: "Webサイトからの問い合わせ [#{contact.name}]"
  end
end