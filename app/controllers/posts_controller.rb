class PostsController < ApplicationController
  before_action :set_post, only: [:show, :edit, :update, :destroy]
  # `use_breezy` enables breezy functionality
  # on application.html.erb
  before_action :use_breezy

  # GET /posts
  def index
    @renderer = self.class.renderer.new(request.env)
  end

  # # GET /posts/1
  # def show
  # end

  # GET /posts/new
  def new
    @post = Post.new
  end

  # GET /posts/1/edit
  def edit
  end

  # POST /posts
  def create
    @post = Post.new(post_params)

    if @post.save
      redirect_to @post, notice: 'Post was successfully created.'
    else
      response.set_header("content-location", new_post_path)
      render :new
    end
  end

  # PATCH/PUT /posts/1
  def update
    if @post.update(post_params)
      flash[:success] = 'Saved!'
      redirect_to posts_path, notice: 'Post was successfully updated.'
    else
      response.set_header("content-location", edit_post_path(@post))
      render :edit
    end
  end

  # DELETE /posts/1
  def destroy
    @post.destroy
    redirect_to posts_url, notice: 'Post was successfully destroyed.'
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_post
      @post = Post.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def post_params
      params.require(:post).permit(:body)
    end
end
