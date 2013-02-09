module ApplicationHelpers
  def find_template(views, name, engine, &block)
    _, folder = views.detect { |k,v| engine == Tilt[k] }
    folder ||= views[:default]
    super("#{settings.root}/#{folder}", name, engine, &block)
  end
end
