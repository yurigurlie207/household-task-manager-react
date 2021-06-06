class TasksController < ApplicationController 
    def index
       tasks = Tassk.all
       render json: TaskSerializer.new(tasks)
    end
end


