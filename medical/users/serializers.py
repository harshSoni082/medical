from rest_framework import serializers

from .models import User, UserProfile


class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = '__all__'


class UserDetailSerializer(serializers.ModelSerializer):
    user_profile = serializers.SerializerMethodField()

    def get_user_profile(self, user):
        profile_instance = UserProfile.objects.get(user=user)
        print(profile_instance)

        return UserProfileSerializer(profile_instance).data

    class Meta:
        model = User
        fields = '__all__'
